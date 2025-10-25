drop table if exists carrera;
drop type if exists estados;

create type estados as enum ('activo', 'inactivo', 'en reposo');

create table carrera(
  id bigint primary key  generated always as identity not null,
  created_at timestamp default now() not null,
  nombre text not null,
  status estados default 'activo' not null,
  estudiantes text  default array[]::varchar[] not null,
  anio text not null,
  mes  text not null
);
