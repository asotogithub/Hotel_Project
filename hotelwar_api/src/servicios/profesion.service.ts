import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesion } from '../entidades/profesion.entidad';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { ProfesionDto } from 'src/dto/profesion.dto';

@Injectable()
export class ProfesionService {
  constructor(
    @InjectRepository(Profesion)
    private profesionRepository: Repository<Profesion>,
  ) {}

  async findAll(): Promise<ProfesionDto[]> {
    const profesiones = await this.profesionRepository.find();
    return plainToInstance(ProfesionDto, profesiones);
    //return this.profesionRepository.find();
  }

  async findOne(id: number): Promise<ProfesionDto> {
    const profesion = await this.profesionRepository.findOne({ where: { id } });
    return plainToInstance(ProfesionDto, profesion);
    //return this.profesionRepository.findOne({ where: { id } });
  }

  async create(profesionDto: Partial<ProfesionDto>): Promise<ProfesionDto> {
    
    const profesionPlain = instanceToPlain(profesionDto);
    const profesionData = {
      ...profesionPlain,
      fechaInicio: new Date(),
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const profesionEntity = plainToInstance(Profesion, profesionData);
    const savedProfesion = await this.profesionRepository.save(profesionEntity);
    return plainToInstance(ProfesionDto, savedProfesion, {
      excludeExtraneousValues: true,
    });
    
    //const newProfesion = this.profesionRepository.create(profesion);
    //return this.profesionRepository.save(newProfesion);
  }

  async update(id: number, 
    profesionDto: Partial<ProfesionDto>
  ): Promise<ProfesionDto> {
    
    const profesionExistente = await this.profesionRepository.findOne({
      where: { id },
    });

    if (!profesionExistente) {
      throw new Error('Prefesion no encontrado');
    }

    const profesionPlain = instanceToPlain(profesionDto);

    const profesionData = {
      ...profesionPlain,
      modificadoPor: 1, // TODO: implementar esto con el usuario actual
      fechaModificacion: new Date(),
    };

    Object.assign(profesionExistente, profesionData);

    const profesionActualizado =
      await this.profesionRepository.save(profesionExistente);

    return plainToInstance(ProfesionDto, profesionActualizado, {
      excludeExtraneousValues: true,
    });

    //await this.profesionRepository.update(id, profesion);
    //return this.profesionRepository.findOne({ where: { id } });
  }

  
  async remove(id: number): Promise<void> {
    await this.profesionRepository.delete(id);
  }
}
