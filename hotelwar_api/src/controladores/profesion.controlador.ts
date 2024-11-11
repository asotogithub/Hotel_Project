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
import { ProfesionDto } from 'src/dto/profesion.dto';
import { ProfesionService } from 'src/servicios/profesion.service';


@Controller('api/profesiones')
export class ProfesionControlador {
  constructor(private readonly profesionService: ProfesionService) {}

  @Post()
  async create(@Body() profesionDto: Partial<ProfesionDto>): Promise<ProfesionDto> {
    try {
      return await this.profesionService.create(profesionDto);
    } catch (error) {
      throw new HttpException(
        'Error al crear la profesion',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(): Promise<ProfesionDto[]> {
    try {
      return await this.profesionService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error al obtener las profesiones',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProfesionDto> {
    try {
      const profesion = await this.profesionService.findOne(+id);
      if (!profesion) {
        throw new HttpException('Profesion no encontrado', HttpStatus.NOT_FOUND);
      }
      return profesion;
    } catch (error) {
      throw new HttpException(
        'Error al obtener la profesion',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() profesionDto: Partial<ProfesionDto>,
  ): Promise<ProfesionDto> {
    try {
      const updatedProfesion = await this.profesionService.update(+id, profesionDto);
      if (!updatedProfesion) {
        throw new HttpException('Profesion no encontrado', HttpStatus.NOT_FOUND);
      }
      return updatedProfesion;
    } catch (error) {
      throw new HttpException(
        'Error al actualizar la profesion',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.profesionService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar la profesion',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
