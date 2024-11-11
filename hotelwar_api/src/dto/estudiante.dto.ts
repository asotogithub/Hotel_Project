import { Exclude, Expose, Type } from 'class-transformer';
import { PersonaDto } from './persona.dto';

@Exclude()
export class EstudianteDto {
  @Expose()
  id: number;

  @Expose()
  personaId: number;

  @Expose()
  colegioId: number;

  @Expose()
  rude: string;

  @Expose()
  nombreTutor: string;

  @Expose()
  numeroCelularTutor: string;

  @Expose()
  estado: string;

  @Expose()
  @Type(() => PersonaDto)
  persona: PersonaDto;
}
