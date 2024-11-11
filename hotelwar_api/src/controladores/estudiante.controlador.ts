import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EstudianteService } from '../servicios/estudiante.servicio';
import { EstudianteDto } from '../dto/estudiante.dto';

@Controller('api/estudiantes')
export class EstudianteControlador {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  async create(
    @Body() estudianteDto: Partial<EstudianteDto>,
  ): Promise<EstudianteDto> {
    try {
      return await this.estudianteService.create(estudianteDto);
    } catch (error) {
      throw new HttpException(
        'Error al crear el estudiante',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(): Promise<EstudianteDto[]> {
    try {
      return await this.estudianteService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error al obtener los estudiantes',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EstudianteDto> {
    try {
      const estudiante = await this.estudianteService.findOne(+id);
      if (!estudiante) {
        throw new HttpException(
          'Estudiante no encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      return estudiante;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el estudiante',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() estudianteDto: Partial<EstudianteDto>,
  ): Promise<EstudianteDto> {
    try {
      const updatedEstudiante = await this.estudianteService.update(
        +id,
        estudianteDto,
      );
      if (!updatedEstudiante) {
        throw new HttpException(
          'Estudiante no encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      return updatedEstudiante;
    } catch (error) {
      throw new HttpException(
        'Error al actualizar el estudiante',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.estudianteService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar el estudiante',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
