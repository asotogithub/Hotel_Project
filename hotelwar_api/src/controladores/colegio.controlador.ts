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
import { ColegioService } from '../servicios/colegio.servicio';
import { ColegioDto } from '../dto/colegio.dto';

@Controller('api/colegios')
export class ColegioControlador {
  constructor(private readonly colegioService: ColegioService) {}

  @Post()
  async create(@Body() colegioDto: Partial<ColegioDto>): Promise<ColegioDto> {
    try {
      return await this.colegioService.create(colegioDto);
    } catch (error) {
      throw new HttpException(
        'Error al crear el colegio',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(): Promise<ColegioDto[]> {
    try {
      return await this.colegioService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error al obtener los colegios',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ColegioDto> {
    try {
      const colegio = await this.colegioService.findOne(+id);
      if (!colegio) {
        throw new HttpException('Colegio no encontrado', HttpStatus.NOT_FOUND);
      }
      return colegio;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el colegio',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() colegioDto: Partial<ColegioDto>,
  ): Promise<ColegioDto> {
    try {
      const updatedColegio = await this.colegioService.update(+id, colegioDto);
      if (!updatedColegio) {
        throw new HttpException('Colegio no encontrado', HttpStatus.NOT_FOUND);
      }
      return updatedColegio;
    } catch (error) {
      throw new HttpException(
        'Error al actualizar el colegio',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.colegioService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar el colegio',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
