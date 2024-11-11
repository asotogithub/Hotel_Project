import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Evaluacion } from './evaluacion.entidad';

@Entity('TIPO_EVALUACIONES')
export class TipoEvaluacion {
  @PrimaryGeneratedColumn({ name: 'tev_uid_pk', type: 'int4' })
  id: number;

  @Column({ name: 'tev_nombre', type: 'varchar', length: 20, nullable: true })
  nombre: string;

  @Column({
    name: 'tev_ruta_template',
    type: 'varchar',
    length: 1000,
    nullable: true,
  })
  rutaTemplate: string;

  @Column({ name: 'tev_estado', type: 'varchar', length: 5 })
  estado: string;

  @Column({ name: 'tev_fecha_ini', type: 'date' })
  fechaInicio: Date;

  @Column({ name: 'tev_fecha_fin', type: 'date', nullable: true })
  fechaFin: Date;

  @Column({ name: 'creado_por', type: 'int4' })
  creadoPor: number;

  @Column({ name: 'fecha_creacion', type: 'date' })
  fechaCreacion: Date;

  @Column({ name: 'modificado_por', type: 'int4', nullable: true })
  modificadoPor: number;

  @Column({ name: 'fecha_modificacion', type: 'date', nullable: true })
  fechaModificacion: Date;

  @OneToMany(() => Evaluacion, (evaluacion) => evaluacion.tipoEvaluacion)
  evaluaciones: Evaluacion[];
}
