import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Estudiante } from './estudiante.entidad';

@Entity('ANTEDECENTES')
export class Antecedente {
  @PrimaryGeneratedColumn({ name: 'ant_uid_pk', type: 'int4' })
  id: number;
  
  @Column({ name: 'ant_estudiante_uid_fk', type: 'int8', nullable: true })
  estudianteId: number;

  @Column({ name: 'ant_gestion', type: 'varchar', length: 20, nullable: true })
  gestion: string;

  @Column({ name: 'ant_descripcion', type: 'varchar', length: 1000 })
  descripcion: string;

  @Column({ name: 'ant_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'ant_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'ant_fecha_fin', type: 'date', nullable: true })
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
