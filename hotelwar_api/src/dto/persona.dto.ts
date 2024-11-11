import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class PersonaDto {
  @Expose()
  id: number;

  @Expose()
  ci: string;

  @Expose()
  nombres: string;

  @Expose()
  apellidoPaterno: string;

  @Expose()
  apellidoMaterno: string;

  @Expose()
  email: string;

  @Expose()
  fechaNacimiento: Date;

  @Expose()
  estado: string;
}
