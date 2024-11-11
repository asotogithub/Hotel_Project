import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Estudiante } from './estudiante.entidad';
import { Administrador } from './administrador.entidad';
import { TipoEvaluacion } from './tipo-evaluacion.entidad';

@Entity('EVALUACIONES')
export class Evaluacion {
  @PrimaryGeneratedColumn({ name: 'eva_uid_pk', type: 'int4' })
  id: number;

  @Column({
    name: 'eva_tipo_evaluaciones_uid_fk',
    type: 'int4',
    nullable: true,
  })
  tipoEvaluacionId: number;

  @Column({ name: 'eva_estudientes_uid_fk', type: 'int4', nullable: true })
  estudianteId: number;

  @Column({ name: 'eva_administradores_uid_fk', type: 'int4', nullable: true })
  administradorId: number;

  @Column({ name: 'eva_codigo', type: 'varchar', length: 20, nullable: true })
  codigo: string;

  @Column({ name: 'eva_comentarios', type: 'varchar', length: 1000 })
  comentarios: string;

  @Column({
    name: 'eva_ruta_achivo',
    type: 'varchar',
    length: 1000,
    nullable: true,
  })
  rutaArchivo: string;

  @Column({ name: 'eva_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'eva_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'eva_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @ManyToOne(
    () => TipoEvaluacion,
    (tipoEvaluacion) => tipoEvaluacion.evaluaciones,
  )
  @JoinColumn({ name: 'eva_tipo_evaluaciones_uid_fk' })
  tipoEvaluacion: TipoEvaluacion;

  @ManyToOne(() => Estudiante, (estudiante) => estudiante.evaluaciones)
  @JoinColumn({ name: 'eva_estudientes_uid_fk' })
  estudiante: Estudiante;

  @ManyToOne(() => Administrador, (administrador) => administrador.evaluaciones)
  @JoinColumn({ name: 'eva_administradores_uid_fk' })
  administrador: Administrador;
}
