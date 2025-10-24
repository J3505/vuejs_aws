drop table if exists Carrera;
drop type if exists estados;

create type estados as enum ('activo', 'inicativo', 'en reposo');

create table
  Carrera(
    id bigint primary key generated always as identity not null,
    create_at timestamp default now() not null,
    name text not null,
    status estados default 'activo' not null,
    estudiantes text array default array[]::varchar[] not null,
    anio text not null
    mes tes not null
  );

  insert into Carrera(name,anio,mes) values ('Diseño grafico', '2025','noviembre');