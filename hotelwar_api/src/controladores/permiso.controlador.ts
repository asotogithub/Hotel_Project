import{
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { PermisoService } from 'src/servicios/permiso.servicio';
import { PermisoDto } from 'src/dto/permiso.dto';
import { error } from 'console';

@Controller('api/permisos') 
export class PermisoControlador{
    constructor(private readonly permisoService: PermisoService){}

    @Post()
    async create(@Body() permisoDto: Partial<PermisoDto>):Promise<PermisoDto> {
        try{
            return await this.permisoService.create(permisoDto);

        } catch(error) {
            throw new HttpException(
                'Error al crear el Permiso.',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get()
    async findAll(): Promise<PermisoDto[]> {
      try {
        return await this.permisoService.findAll();
      } catch (error) {
        throw new HttpException(
          'Error al obtener los Permisos',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PermisoDto> {
    try {
      const permiso = await this.permisoService.findOne(+id);
      if (!permiso) {
        throw new HttpException('Permiso no encontrado', HttpStatus.NOT_FOUND);
      }
      return permiso;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el permiso',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() permiso: Partial<PermisoDto>,
  ): Promise<PermisoDto> {
    try {
      const updatedPermiso = await this.permisoService.update(+id, permiso);
      if (!updatedPermiso) {
        throw new HttpException('Permiso no encontrado', HttpStatus.NOT_FOUND);
      }
      return updatedPermiso;
    } catch (error) {
      throw new HttpException(
        'Error al actualizar el Permiso',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.permisoService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar el permiso',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}

