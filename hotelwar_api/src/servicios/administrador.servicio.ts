import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Administrador } from '../entidades/administrador.entidad';

@Injectable()
export class AdministradorService {
  constructor(
    @InjectRepository(Administrador)
    private administradorRepository: Repository<Administrador>,
  ) {}

  async findAll(): Promise<Administrador[]> {
    return this.administradorRepository.find();
  }

  async findOne(id: number): Promise<Administrador> {
    return this.administradorRepository.findOne({ where: { id } });
  }

  async create(administrador: Partial<Administrador>): Promise<Administrador> {
    const newAdministrador = this.administradorRepository.create(administrador);
    return this.administradorRepository.save(newAdministrador);
  }

  async update(
    id: number,
    administrador: Partial<Administrador>,
  ): Promise<Administrador> {
    await this.administradorRepository.update(id, administrador);
    return this.administradorRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.administradorRepository.delete(id);
  }
}
