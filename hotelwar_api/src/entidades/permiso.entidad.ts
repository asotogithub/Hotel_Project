import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PermisoRecurso } from './permiso-recurso.entidad';
import { RolPermiso } from './rol-permiso.entidad';

@Entity('PERMISOS')
export class Permiso {
  @PrimaryGeneratedColumn({ name: 'per_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'per_codigo', type: 'varchar', length: 250 })
  codigo: string;

  @Column({
    name: 'per_descripcion',
    type: 'varchar',
    length: 1000,
    nullable: true,
  })
  descripcion: string;

  @Column({ name: 'per_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'per_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'per_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => PermisoRecurso, (permisoRecurso) => permisoRecurso.permiso)
  permisoRecursos: PermisoRecurso[];

  @OneToMany(() => RolPermiso, (rolPermiso) => rolPermiso.permiso)
  rolPermisos: RolPermiso[];
}
