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

import { RecursoService } from 'src/servicios/recurso.servicio';
import { RecursoDto } from 'src/dto/recurso.dto';
import { error } from 'console';

@Controller('api/recursos') 
export class RecursoControlador{
    constructor(private readonly recursoService: RecursoService){}

    @Post()
    async create(@Body() recursoDto: Partial<RecursoDto>):Promise<RecursoDto> {
        try{
            return await this.recursoService.create(recursoDto);

        } catch(error) {
            throw new HttpException(
                'Error al crear el Recurso.',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get()
    async findAll(): Promise<RecursoDto[]> {
      try {
        return await this.recursoService.findAll();
      } catch (error) {
        throw new HttpException(
          'Error al obtener los Recursos',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RecursoDto> {
    try {
      const recurso = await this.recursoService.findOne(+id);
      if (!recurso) {
        throw new HttpException('Recurso no encontrado', HttpStatus.NOT_FOUND);
      }
      return recurso;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el recurso',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() recurso: Partial<RecursoDto>,
  ): Promise<RecursoDto> {
    try {
      const updatedRecurso = await this.recursoService.update(+id, recurso);
      if (!updatedRecurso) {
        throw new HttpException('Recurso no encontrado', HttpStatus.NOT_FOUND);
      }
      return updatedRecurso;
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
      await this.recursoService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar el recurso',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}

