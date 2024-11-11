import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evaluacion } from '../entidades/evaluacion.entidad';

@Injectable()
export class EvaluacionService {
  constructor(
    @InjectRepository(Evaluacion)
    private evaluacionRepository: Repository<Evaluacion>,
  ) {}

  async findAll(): Promise<Evaluacion[]> {
    return this.evaluacionRepository.find();
  }

  async findOne(id: number): Promise<Evaluacion> {
    return this.evaluacionRepository.findOne({ where: { id } });
  }

  async create(evaluacion: Partial<Evaluacion>): Promise<Evaluacion> {
    const newEvaluacion = this.evaluacionRepository.create(evaluacion);
    return this.evaluacionRepository.save(newEvaluacion);
  }

  async update(
    id: number,
    evaluacion: Partial<Evaluacion>,
  ): Promise<Evaluacion> {
    await this.evaluacionRepository.update(id, evaluacion);
    return this.evaluacionRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.evaluacionRepository.delete(id);
  }
}
