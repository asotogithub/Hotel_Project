import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Administrador } from './administrador.entidad';
import { Estudiante } from './estudiante.entidad';
import { Usuario } from './usuario.entidad';

@Entity('PERSONAS')
export class Persona {
  @PrimaryGeneratedColumn({ name: 'per_uid_pk', type: 'int8' })
  id: number;

  @Column({ name: 'per_CI', type: 'varchar', length: 20, nullable: true })
  ci: string;

  @Column({ name: 'per_nombres', type: 'varchar', length: 250 })
  nombres: string;

  @Column({ name: 'per_apellido_paterno', type: 'varchar', length: 250 })
  apellidoPaterno: string;

  @Column({
    name: 'per_apellido_materno',
    type: 'varchar',
    length: 250,
    nullable: true,
  })
  apellidoMaterno: string;

  @Column({ name: 'per_email', type: 'varchar', length: 250, nullable: true })
  email: string;

  @Column({ name: 'per_fecha_nacimiento', type: 'date', nullable: true })
  fechaNacimiento: Date;

  @Column({ name: 'per_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'per_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'per_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int8' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int8', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => Administrador, (administrador) => administrador.persona)
  administradores: Administrador[];

  @OneToMany(() => Estudiante, (estudiante) => estudiante.persona)
  estudiantes: Estudiante[];

  @OneToMany(() => Usuario, (usuario) => usuario.persona)
  usuarios: Usuario[];
}
