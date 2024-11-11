import { Exclude, Expose , Type} from 'class-transformer';
import { EstudianteDto } from './estudiante.dto';

@Exclude()
export class AntecedenteDto {
    @Expose()
    id: number;
    @Expose()
    estudianteId: number;
    @Expose()
    gestion: string;
    @Expose()
    descripcion: string;
    @Expose()
    estado: string;

    @Expose()
    @Type(() => EstudianteDto)
    estudiante: EstudianteDto;
}
