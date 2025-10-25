import { es, fakerES_MX as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const log = (tablaName, error) => {
  if (error) {
    console.error(`❌❌❌ Error al insertar datos en la tabla ${tablaName}:`, error.message)
  } else {
    console.log(`Datos insertados correctamente en la tabla ${tablaName} ✅✅✅`)
  }
}

const mensaje = (stepMessage) => console.log(`--- ${stepMessage} ---`)

const seedCarreras = async (num) => {
  // Start the insertion process
  mensaje('Iniciando el proceso de inserción de datos')

  const carreras = []

  for (let i = 0; i < num; i++) {
    const nombre = faker.lorem.words(3)
    const status = faker.helpers.arrayElement(['activo', 'inactivo', 'en reposo'])
    const estudiantes = faker.helpers.arrayElements([1, 2, 3, 4])
    const anio = faker.date.past().getFullYear() // Get the year as a number
    const mes = faker.date.month({ context: 'standalone', length: 'wide', locale: es })

    carreras.push({
      nombre,
      status,
      estudiantes,
      anio: anio.toString(),
      mes,
    })
  }

  // Insert into the Supabase 'carrera' table
  const { data, error } = await supabase.from('carrera').insert(carreras).select('id')

  if (error) {
    log('carrera', error)
  } else {
    log('carrera', null)
    console.log(
      'IDs de las carreras insertadas:',
      data.map((item) => item.id),
    )
  }

  mensaje('Proceso de inserción de datos finalizado')
}

const envioData = async (nume) => {
  await seedCarreras(nume)
}

await envioData(50)
