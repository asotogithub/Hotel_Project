import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recurso } from '../entidades/recurso.entidad';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { RecursoDto } from 'src/dto/recurso.dto';

@Injectable()
export class RecursoService {
  constructor(
    @InjectRepository(Recurso)
    private recursoRepository: Repository<Recurso>,
  ) {}

  async findAll(): Promise<RecursoDto[]> {
    const recursos = await this.recursoRepository.find();
    return plainToInstance(RecursoDto, recursos);
    //return this.recursoRepository.find();
  }

  async findOne(id: number): Promise<RecursoDto> {
    const recurso = await this.recursoRepository.findOne({ where: { id } });
    return plainToInstance(RecursoDto, recurso);
    //return this.recursoRepository.findOne({ where: { id } });
  }

  async create(recursoDto: Partial<RecursoDto>): Promise<RecursoDto> {
    
    const recursoPlain = instanceToPlain(recursoDto);
    const recursoData = {
      ...recursoPlain,
      fechaInicio: new Date(),
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const recursoEntity = plainToInstance(Recurso, recursoData);
    const savedRecurso = await this.recursoRepository.save(recursoEntity);
    return plainToInstance(RecursoDto, savedRecurso, {
      excludeExtraneousValues: true,
    });

    //const newRecurso = this.recursoRepository.create(recurso);
    //return this.recursoRepository.save(newRecurso);
  }

  async update(id: number, 
    recurso: Partial<RecursoDto>
  ): Promise<RecursoDto> {
  
    const recursoExistente = await this.recursoRepository.findOne({
      where: { id },
    });

    if (!recursoExistente) {
      throw new Error('Recurso no encontrado');
    }

    const recursoPlain = instanceToPlain(RecursoDto);

    const recursoData = {
      ...recursoPlain,
      modificadoPor: 1, // TODO: implementar esto con el usuario actual
      fechaModificacion: new Date(),
    };

    Object.assign(recursoExistente, recursoData);

    const recursoActualizado =
      await this.recursoRepository.save(recursoExistente);

    return plainToInstance(RecursoDto, recursoActualizado, {
      excludeExtraneousValues: true,
    });

    //await this.recursoRepository.update(id, recurso);
    //return this.recursoRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.recursoRepository.delete(id);
  }
}
