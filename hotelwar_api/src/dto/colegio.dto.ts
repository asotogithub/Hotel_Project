import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ColegioDto {
  @Expose()
  id: number;

  @Expose()
  codigo: string;

  @Expose()
  nombre: string;

  @Expose()
  numeroCelular: string;

  @Expose()
  direccion: string;

  @Expose()
  estado: string;
}
