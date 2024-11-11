import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from './entidades/administrador.entidad';
import { Colegio } from './entidades/colegio.entidad';
import { Estudiante } from './entidades/estudiante.entidad';
import { Evaluacion } from './entidades/evaluacion.entidad';
import { Permiso } from './entidades/permiso.entidad';
import { PermisoRecurso } from './entidades/permiso-recurso.entidad';
import { Persona } from './entidades/persona.entidad';
import { Profesion } from './entidades/profesion.entidad';
import { Recurso } from './entidades/recurso.entidad';
import { Rol } from './entidades/rol.entidad';
import { RolPermiso } from './entidades/rol-permiso.entidad';
import { TipoEvaluacion } from './entidades/tipo-evaluacion.entidad';
import { Usuario } from './entidades/usuario.entidad';
import { UsuarioRol } from './entidades/usuario-rol.entidad';
import { Antecedente } from './entidades/antecedente.entidad';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Administrador,
      Colegio,
      Estudiante,
      Evaluacion,
      Permiso,
      PermisoRecurso,
      Persona,
      Profesion,
      Recurso,
      Rol,
      RolPermiso,
      TipoEvaluacion,
      Usuario,
      UsuarioRol,
      Antecedente
    ]),
  ],
  exports: [TypeOrmModule],
})
export class EntidadesModulo {}
