import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entidades/usuario.entidad';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { UsuarioDto } from 'src/dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<UsuarioDto[]> {

    const usuarios = await this.usuarioRepository.find();
    return plainToInstance(UsuarioDto, usuarios);

  }

  async findOne(id: number): Promise<UsuarioDto> {

    const usuario = await this.usuarioRepository.findOne({where: {id}});
    return plainToInstance(UsuarioDto, usuario);
  }

  async create(usuarioDto: Partial<UsuarioDto>): Promise<UsuarioDto> {

    const usuarioPlain = instanceToPlain(usuarioDto);
    const usuarioData = {
      ...usuarioPlain, 
      fechaInicio: new Date(),
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const usuarioEntity = plainToInstance(Usuario, usuarioData);
    const savedUsuario = await this.usuarioRepository.create(usuarioEntity);
    return plainToInstance(UsuarioDto, savedUsuario, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, usuarioDto: Partial<UsuarioDto>): Promise<UsuarioDto> {
    await this.usuarioRepository.update(id, usuarioDto);
    return this.usuarioRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
