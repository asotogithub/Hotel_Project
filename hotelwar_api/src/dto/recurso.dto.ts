import { Exclude, Expose } from "class-transformer";

@Exclude()
export class RecursoDto {
   @Expose()
   id: number;
   
   @Expose()
   nombre: string;
   
   @Expose()
   direccion: string;
   
   @Expose()
   estado: string;

}
