import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ProfesionDto {
    @Expose()
    id: number;
    
    @Expose()
    codigo: string;
    
    @Expose()
    nombre: string;
    
    @Expose()
    estado: string;
}

