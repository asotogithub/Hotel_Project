import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoEvaluacion } from '../entidades/tipo-evaluacion.entidad';
import { plainToInstance, instanceToPlain } from 'class-transformer';
import { TipoEvaluacionDto } from 'src/dto/tipo-evaluacion.dto';
import * as fs from 'node:fs';
import { getAbsolutePath, getRelativePath } from '../utilitarios/file.helper';

@Injectable()
export class TipoEvaluacionService {
  constructor(
    @InjectRepository(TipoEvaluacion)
    private tipoEvaluacionRepository: Repository<TipoEvaluacion>,
  ) {}

  async findAll(): Promise<TipoEvaluacionDto[]> {
    const tipoEvaluaciones = await this.tipoEvaluacionRepository.find();
    return plainToInstance(TipoEvaluacionDto, tipoEvaluaciones);
  }

  async findOne(id: number): Promise<TipoEvaluacionDto> {
    const tipoEvaluacion = await this.tipoEvaluacionRepository.findOne({
      where: { id },
    });
    return plainToInstance(TipoEvaluacionDto, tipoEvaluacion);
  }

  async create(
    tipoEvaluacionDto: Partial<TipoEvaluacionDto>,
  ): Promise<TipoEvaluacionDto> {
    const tipoEvaluacionPlain = instanceToPlain(tipoEvaluacionDto);

    // Convertir la ruta absoluta a relativa para almacenar en la BD
    if (tipoEvaluacionPlain.rutaTemplate) {
      tipoEvaluacionPlain.rutaTemplate = getRelativePath(tipoEvaluacionPlain.rutaTemplate);
    }

    const tipoEvaluacionData = {
      ...tipoEvaluacionPlain,
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const tipoEvaluacionEntity = plainToInstance(
      TipoEvaluacion,
      tipoEvaluacionData,
    );

    const savedTipoEvaluacion = await this.tipoEvaluacionRepository.save(tipoEvaluacionEntity);

    return plainToInstance(TipoEvaluacionDto, savedTipoEvaluacion, {
      excludeExtraneousValues: true,
    });
  }

  async update(
    id: number,
    tipoEvaluacionDto: Partial<TipoEvaluacionDto>,
  ): Promise<TipoEvaluacionDto> {
    const tipoEvaluacionExistente = await this.tipoEvaluacionRepository.findOne(
      {
        where: { id },
      },
    );

    if (!tipoEvaluacionExistente) {
      throw new HttpException(
        'Tipo de Evaluacion no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    // Si hay un nuevo archivo, eliminamos el anterior
    if (
      tipoEvaluacionDto.rutaTemplate &&
      tipoEvaluacionExistente.rutaTemplate &&
      tipoEvaluacionDto.rutaTemplate !== tipoEvaluacionExistente.rutaTemplate
    ) {
      const rutaAnterior = getAbsolutePath(tipoEvaluacionExistente.rutaTemplate);
      try {
        if (fs.existsSync(rutaAnterior)) {
          fs.unlinkSync(rutaAnterior);
        }
      } catch (error) {
        console.error('Error al eliminar el archivo anterior:', error);
      }
    }

    const tipoEvaluacionPlain = instanceToPlain(tipoEvaluacionDto);

    // Convertir la ruta absoluta a relativa para almacenar en la BD
    if (tipoEvaluacionPlain.rutaTemplate) {
      tipoEvaluacionPlain.rutaTemplate = getRelativePath(tipoEvaluacionPlain.rutaTemplate);
    }

    const tipoEvaluacionData = {
      ...tipoEvaluacionPlain,
      modificadoPor: 1, // TODO: implementar esto con el usuario actual
      fechaModificacion: new Date(),
    };

    Object.assign(tipoEvaluacionExistente, tipoEvaluacionDto);

    const tipoEvaluacionActualizado = await this.tipoEvaluacionRepository.save(
      tipoEvaluacionExistente,
    );

    return plainToInstance(TipoEvaluacionDto, tipoEvaluacionActualizado, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: number): Promise<void> {
    const tipoEvaluacion = await this.tipoEvaluacionRepository.findOne({
      where: { id },
    });

    if (tipoEvaluacion?.rutaTemplate) {
      const rutaAbsoluta = getAbsolutePath(tipoEvaluacion.rutaTemplate);
      try {
        if (fs.existsSync(rutaAbsoluta)) {
          fs.unlinkSync(rutaAbsoluta);
        }
      } catch (error) {
        console.error('Error al eliminar el archivo:', error);
      }
    }

    await this.tipoEvaluacionRepository.delete(id);
  }
}
