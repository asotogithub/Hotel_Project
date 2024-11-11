import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Colegio } from '../entidades/colegio.entidad';
import { ColegioDto } from '../dto/colegio.dto';

@Injectable()
export class ColegioService {
  constructor(
    @InjectRepository(Colegio)
    private colegioRepository: Repository<Colegio>,
  ) {}

  async findAll(): Promise<ColegioDto[]> {
    const colegios = await this.colegioRepository.find();
    return plainToInstance(ColegioDto, colegios);
    // return this.colegioRepository.find();
  }

  async findOne(id: number): Promise<ColegioDto> {
    const colegio = await this.colegioRepository.findOne({ where: { id } });
    return plainToInstance(ColegioDto, colegio);
    // return this.colegioRepository.findOne({ where: { id } });
  }

  async create(colegioDto: Partial<ColegioDto>): Promise<ColegioDto> {
    const colegioPlain = instanceToPlain(colegioDto);
    const colegioData = {
      ...colegioPlain,
      fechaInicio: new Date(),
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const colegioEntity = plainToInstance(Colegio, colegioData);
    const savedColegio = await this.colegioRepository.save(colegioEntity);
    return plainToInstance(ColegioDto, savedColegio, {
      excludeExtraneousValues: true,
    });

    // const newColegio = this.colegioRepository.create(colegio);
    // return this.colegioRepository.save(newColegio);
  }

  async update(
    id: number,
    colegioDto: Partial<ColegioDto>,
  ): Promise<ColegioDto> {
    const colegioExistente = await this.colegioRepository.findOne({
      where: { id },
    });

    if (!colegioExistente) {
      throw new Error('Colegio no encontrado');
    }

    const colegioPlain = instanceToPlain(colegioDto);

    const colegioData = {
      ...colegioPlain,
      modificadoPor: 1, // TODO: implementar esto con el usuario actual
      fechaModificacion: new Date(),
    };

    Object.assign(colegioExistente, colegioData);

    const colegioActualizado =
      await this.colegioRepository.save(colegioExistente);

    return plainToInstance(ColegioDto, colegioActualizado, {
      excludeExtraneousValues: true,
    });

    // await this.colegioRepository.update(id, colegio);
    // return this.colegioRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.colegioRepository.delete(id);
  }
}
