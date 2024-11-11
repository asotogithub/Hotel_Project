import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Permiso } from './permiso.entidad';
import { Recurso } from './recurso.entidad';

@Entity('PERMISO_RECURSOS')
export class PermisoRecurso {
  @PrimaryGeneratedColumn({ name: 'prr_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'prr_permisos_uid_fk', type: 'int4' })
  permisoId: number;

  @Column({ name: 'prr_recursos_uid_fk', type: 'int4', nullable: true })
  recursoId: number;

  @Column({ name: 'prr_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'prr_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'prr_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @ManyToOne(() => Permiso, (permiso) => permiso.permisoRecursos)
  @JoinColumn({ name: 'prr_permisos_uid_fk' })
  permiso: Permiso;

  @ManyToOne(() => Recurso, (recurso) => recurso.permisoRecursos)
  @JoinColumn({ name: 'prr_recursos_uid_fk' })
  recurso: Recurso;
}
