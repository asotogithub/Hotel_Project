import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Colegio } from './colegio.entidad';
import { Evaluacion } from './evaluacion.entidad';
import { Persona } from './persona.entidad';

@Entity('ESTUDIANTES')
export class Estudiante {
  @PrimaryGeneratedColumn({ name: 'est_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'est_personas_uid_fk', type: 'int8', nullable: true })
  personaId: number;

  @Column({ name: 'est_colegios_uid_fk', type: 'int4', nullable: true })
  colegioId: number;

  @Column({ name: 'est_rude', type: 'varchar', length: 20, nullable: true })
  rude: string;

  @Column({ name: 'est_nombre_tutor', type: 'varchar', length: 250 })
  nombreTutor: string;

  @Column({ name: 'est_num_cell_tutor', type: 'varchar', length: 250 })
  numeroCelularTutor: string;

  @Column({ name: 'est_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'est_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'est_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @ManyToOne(() => Persona, (persona) => persona.estudiantes)
  @JoinColumn({ name: 'est_personas_uid_fk' })
  persona: Persona;

  @ManyToOne(() => Colegio, (colegio) => colegio.estudiantes)
  @JoinColumn({ name: 'est_colegios_uid_fk' })
  colegio: Colegio;

  @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.estudiante)
  evaluaciones: Evaluacion[];
}
