import { Exclude, Expose, Type } from "class-transformer";
import { PersonaDto } from "./persona.dto";

@Exclude()
export class UsuarioDto {
    
    @Expose()
    id: number;
    
    @Expose()
    personaId: number;
    
    @Expose()
    nombre: string;
    
    @Expose()
    clave: string;
    
    @Expose()
    email: string;
    
    @Expose()
    estado: string;

    @Expose()
    @Type(() => PersonaDto)
    persona: PersonaDto;

}

