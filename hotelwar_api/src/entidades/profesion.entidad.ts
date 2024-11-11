import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Administrador } from './administrador.entidad';

@Entity('PROFESIONES')
export class Profesion {
  @PrimaryGeneratedColumn({ name: 'prf_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'prf_codigo', type: 'varchar', length: 20, nullable: true })
  codigo: string;

  @Column({ name: 'prf_nombre', type: 'varchar', length: 250 })
  nombre: string;

  @Column({ name: 'prf_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'prf_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'prf_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => Administrador, (administrador) => administrador.profesion)
  administradores: Administrador[];
}
