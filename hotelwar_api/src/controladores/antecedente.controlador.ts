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
  import { AntecedenteService } from 'src/servicios/antecedente.servicio'; 
  import { AntecedenteDto } from 'src/dto/antecedente.dto'; 
  
  @Controller('api/antecedentes')
  export class AntecedenteControlador {
    constructor(private readonly antecedenteService: AntecedenteService) {}
  
    @Post()
    async create(@Body() antecedenteDto: Partial<AntecedenteDto>): Promise<AntecedenteDto> {
      try {
        return await this.antecedenteService.create(antecedenteDto);
      } catch (error) {
        throw new HttpException(
          'Error al crear el Antecedente',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    @Get()
    async findAll(): Promise<AntecedenteDto[]> {
      try {
        return await this.antecedenteService.findAll();
      } catch (error) {
        throw new HttpException(
          'Error al obtener los antecendentes',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<AntecedenteDto> {
      try {
        const antecedente = await this.antecedenteService.findOne(+id);
        if (!antecedente) {
          throw new HttpException('Antecedente no encontrado', HttpStatus.NOT_FOUND);
        }
        return antecedente;
      } catch (error) {
        throw new HttpException(
          'Error al obtener el antecedente',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Put(':id')
    async update(
      @Param('id') id: string,
      @Body() antecedenteDto: Partial<AntecedenteDto>,
    ): Promise<AntecedenteDto> {
      try {
        const updatedAntecedente = await this.antecedenteService.update(+id, antecedenteDto);
        if (!updatedAntecedente) {
          throw new HttpException('Antecedente no encontrado', HttpStatus.NOT_FOUND);
        }
        return updatedAntecedente;
      } catch (error) {
        throw new HttpException(
          'Error al actualizar el antecedente',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      try {
        await this.antecedenteService.remove(+id);
      } catch (error) {
        throw new HttpException(
          'Error al eliminar el antecedente',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }
  