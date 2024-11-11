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

import { RolService } from 'src/servicios/rol.servicio';
import { RolDto } from 'src/dto/rol.dto';
import { error } from 'console';

@Controller('api/roles') 
export class RolControlador{
    constructor(private readonly rolService: RolService){}

    @Post()
    async create(@Body() rolDto: Partial<RolDto>):Promise<RolDto> {
        try{
            return await this.rolService.create(rolDto);

        } catch(error) {
            throw new HttpException(
                'Error al crear el rol.',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get()
    async findAll(): Promise<RolDto[]> {
      try {
        return await this.rolService.findAll();
      } catch (error) {
        throw new HttpException(
          'Error al obtener los Roles',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RolDto> {
    try {
      const rol = await this.rolService.findOne(+id);
      if (!rol) {
        throw new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
      }
      return rol;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el rol',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() rol: Partial<RolDto>,
  ): Promise<RolDto> {
    try {
      const updatedRol = await this.rolService.update(+id, rol);
      if (!updatedRol) {
        throw new HttpException('Rol no encontrado', HttpStatus.NOT_FOUND);
      }
      return updatedRol;
    } catch (error) {
      throw new HttpException(
        'Error al actualizar el Rol',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.rolService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar el rol',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}

