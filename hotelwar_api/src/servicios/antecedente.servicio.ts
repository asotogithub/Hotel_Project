import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Antecedente } from 'src/entidades/antecedente.entidad'; 
import { AntecedenteDto } from 'src/dto/antecedente.dto'; 

@Injectable()
export class AntecedenteService {
  constructor(
    @InjectRepository(Antecedente)
    private antecedenteRepository: Repository<Antecedente>,
  ) {}

  async findAll(): Promise<AntecedenteDto[]> {
    const antecedentes = await this.antecedenteRepository.find();
    return plainToInstance(AntecedenteDto, antecedentes);
    // return this.colegioRepository.find();
  }

  async findOne(id: number): Promise<AntecedenteDto> {
    const antecedente = await this.antecedenteRepository.findOne({ where: { id } });
    return plainToInstance(AntecedenteDto, antecedente);
    // return this.colegioRepository.findOne({ where: { id } });
  }

  async create(antecedenteDto: Partial<AntecedenteDto>): Promise<AntecedenteDto> {
    const antecedentePlain = instanceToPlain(antecedenteDto);
    const antecedenteData = {
      ...antecedentePlain,
      fechaInicio: new Date(),
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const antecedenteEntity = plainToInstance(Antecedente, antecedenteData);
    const savedAntedecente = await this.antecedenteRepository.save(antecedenteEntity);
    return plainToInstance(AntecedenteDto, savedAntedecente, {
      excludeExtraneousValues: true,
    });

    // const newColegio = this.colegioRepository.create(colegio);
    // return this.colegioRepository.save(newColegio);
  }

  async update(
    id: number,
    antecedenteDto: Partial<AntecedenteDto>,
  ): Promise<AntecedenteDto> {
    const antecedenteExistente = await this.antecedenteRepository.findOne({
      where: { id },
    });

    if (!antecedenteExistente) {
      throw new Error('Antecedente no encontrado');
    }

    const antecedentePlain = instanceToPlain(antecedenteDto);

    const antecedenteData = {
      ...antecedentePlain,
      modificadoPor: 1, // TODO: implementar esto con el usuario actual
      fechaModificacion: new Date(),
    };

    Object.assign(antecedenteExistente, antecedenteData);

    const antecedenteActualizado =
      await this.antecedenteRepository.save(antecedenteExistente);

    return plainToInstance(AntecedenteDto, antecedenteActualizado, {
      excludeExtraneousValues: true,
    });

    // await this.colegioRepository.update(id, colegio);
    // return this.colegioRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.antecedenteRepository.delete(id);
  }
}
