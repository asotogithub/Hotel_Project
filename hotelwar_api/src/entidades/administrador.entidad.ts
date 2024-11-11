import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Evaluacion } from './evaluacion.entidad';
import { Persona } from './persona.entidad';
import { Profesion } from './profesion.entidad';

@Entity('ADMINISTRADORES')
export class Administrador {
  @PrimaryGeneratedColumn({ name: 'adm_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'adm_personas_uid_fk', type: 'int8', nullable: true })
  personaId: number;

  @Column({ name: 'adm_profesiones_uid_fk', type: 'int4', nullable: true })
  profesionId: number;

  @Column({
    name: 'adm_num_profesional',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  numeroProfesional: string;

  @Column({ name: 'adm_cargo', type: 'varchar', length: 250 })
  cargo: string;

  @Column({ name: 'adm_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'adm_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'adm_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @ManyToOne(() => Persona, (persona) => persona.administradores)
  @JoinColumn({ name: 'adm_personas_uid_fk' })
  persona: Persona;

  @ManyToOne(() => Profesion, (profesion) => profesion.administradores)
  @JoinColumn({ name: 'adm_profesiones_uid_fk' })
  profesion: Profesion;

  @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.administrador)
  evaluaciones: Evaluacion[];
}
