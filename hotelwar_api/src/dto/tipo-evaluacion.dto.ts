import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class TipoEvaluacionDto {
  @Expose()
  id: number;

  @Expose()
  nombre: string;

  @Expose()
  rutaTemplate: string;

  @Expose()
  fechaInicio: Date;

  @Expose()
  fechaFin: Date;

  @Expose()
  estado: string;
}
