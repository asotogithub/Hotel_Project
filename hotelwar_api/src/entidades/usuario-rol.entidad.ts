import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from './rol.entidad';
import { Usuario } from './usuario.entidad';

@Entity('USUARIO_ROLES')
export class UsuarioRol {
  @PrimaryGeneratedColumn({ name: 'urr_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'urr_roles_uid_fk', type: 'int4', nullable: true })
  rolId: number;

  @Column({ name: 'urr_usuarios_uid_fk', type: 'int4', nullable: true })
  usuarioId: number;

  @Column({ name: 'urr_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'urr_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'urr_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @ManyToOne(() => Rol, (rol) => rol.usuarioRoles)
  @JoinColumn({ name: 'urr_roles_uid_fk' })
  rol: Rol;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioRoles)
  @JoinColumn({ name: 'urr_usuarios_uid_fk' })
  usuario: Usuario;
}
