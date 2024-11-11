import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioRol } from '../entidades/usuario-rol.entidad';

@Injectable()
export class UsuarioRolService {
  constructor(
    @InjectRepository(UsuarioRol)
    private usuarioRolRepository: Repository<UsuarioRol>,
  ) {}

  async findAll(): Promise<UsuarioRol[]> {
    return this.usuarioRolRepository.find();
  }

  async findOne(id: number): Promise<UsuarioRol> {
    return this.usuarioRolRepository.findOne({ where: { id } });
  }

  async create(usuarioRol: Partial<UsuarioRol>): Promise<UsuarioRol> {
    const newUsuarioRol = this.usuarioRolRepository.create(usuarioRol);
    return this.usuarioRolRepository.save(newUsuarioRol);
  }

  async update(
    id: number,
    usuarioRol: Partial<UsuarioRol>,
  ): Promise<UsuarioRol> {
    await this.usuarioRolRepository.update(id, usuarioRol);
    return this.usuarioRolRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRolRepository.delete(id);
  }
}
