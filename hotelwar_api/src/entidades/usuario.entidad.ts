import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Persona } from './persona.entidad';
import { UsuarioRol } from './usuario-rol.entidad';

@Entity('USUARIOS')
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'usr_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'usr_personas_uid_fk', type: 'int8', nullable: true })
  personaId: number;

  @Column({ name: 'usr_name', type: 'varchar', length: 250 })
  nombre: string;

  @Column({ name: 'usr_clave', type: 'varchar', length: 250 })
  clave: string;

  @Column({ name: 'usr_email', type: 'varchar', length: 250, nullable: true })
  email: string;

  @Column({ name: 'usr_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'usr_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'usr_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @ManyToOne(() => Persona, (persona) => persona.usuarios)
  @JoinColumn({ name: 'usr_personas_uid_fk' })
  persona: Persona;

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.usuario)
  usuarioRoles: UsuarioRol[];
}
