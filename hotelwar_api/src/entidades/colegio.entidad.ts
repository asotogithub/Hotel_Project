import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Estudiante } from './estudiante.entidad';

@Entity('COLEGIOS')
export class Colegio {
  @PrimaryGeneratedColumn({ name: 'col_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'col_codigo', type: 'varchar', length: 20, nullable: true })
  codigo: string;

  @Column({ name: 'col_nombre', type: 'varchar', length: 250 })
  nombre: string;

  @Column({ name: 'col_num_cell', type: 'varchar', length: 20 })
  numeroCelular: string;

  @Column({
    name: 'col_direccion',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  direccion: string;

  @Column({ name: 'col_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'col_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'col_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => Estudiante, (estudiante) => estudiante.colegio)
  estudiantes: Estudiante[];
}
