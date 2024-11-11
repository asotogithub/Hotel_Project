import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from './rol.entidad';
import { Permiso } from './permiso.entidad';

@Entity('ROL_PERMISOS')
export class RolPermiso {
  @PrimaryGeneratedColumn({ name: 'rlp_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'rlp_roles_uid_fk', type: 'int4', nullable: true })
  rolId: number;

  @Column({ name: 'rlp_permisos_uid_fk', type: 'int4', nullable: true })
  permisoId: number;

  @Column({ name: 'rlp_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'rlp_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'rlp_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @ManyToOne(() => Rol, (rol) => rol.rolPermisos)
  @JoinColumn({ name: 'rlp_roles_uid_fk' })
  rol: Rol;

  @ManyToOne(() => Permiso, (permiso) => permiso.rolPermisos)
  @JoinColumn({ name: 'rlp_permisos_uid_fk' })
  permiso: Permiso;
}
