import { Exclude, Expose } from "class-transformer";

@Exclude()
export class RolDto {
 @Expose()  
 id: number;
 @Expose()
 codigo: string;
 @Expose()
 descripcion: string;
 @Expose()
 estado: string;
  
}

