import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UsuarioRol } from './usuario-rol.entidad';
import { RolPermiso } from './rol-permiso.entidad';

@Entity('ROLES')
export class Rol {
  @PrimaryGeneratedColumn({ name: 'rol_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'rol_codigo', type: 'varchar', length: 250 })
  codigo: string;

  @Column({
    name: 'rol_descripcion',
    type: 'varchar',
    length: 1000,
    nullable: true,
  })
  descripcion: string;

  @Column({ name: 'rol_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'rol_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'rol_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => RolPermiso, (rolPermiso) => rolPermiso.rol)
  rolPermisos: RolPermiso[];

  @OneToMany(() => UsuarioRol, (usuarioRol) => usuarioRol.rol)
  usuarioRoles: UsuarioRol[];
}
