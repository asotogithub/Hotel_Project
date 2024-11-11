import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PermisoRecurso } from './permiso-recurso.entidad';

@Entity('RECURSOS')
export class Recurso {
  @PrimaryGeneratedColumn({ name: 'rec_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'rec_nombre', type: 'varchar', length: 250 })
  nombre: string;

  @Column({
    name: 'rec_direccion',
    type: 'varchar',
    length: 1000,
    nullable: true,
  })
  direccion: string;

  @Column({ name: 'rec_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'rec_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'rec_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => PermisoRecurso, (permisoRecurso) => permisoRecurso.recurso)
  permisoRecursos: PermisoRecurso[];
}
