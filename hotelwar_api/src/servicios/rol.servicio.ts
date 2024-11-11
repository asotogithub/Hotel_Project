import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from '../entidades/rol.entidad';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { RolDto } from 'src/dto/rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  async findAll(): Promise<RolDto[]> {
    const roles = await this.rolRepository.find();
    return plainToInstance(RolDto,roles);
  }

  async findOne(id: number): Promise<RolDto> {
    const rol = await this.rolRepository.findOne({ where: { id } });
    return plainToInstance(RolDto, rol);
  }

  async create(rolDto: Partial<RolDto>): Promise<RolDto> {
    
    const rolPlain = instanceToPlain(rolDto);
    const rolData = {
      ...rolPlain, 
      fechaInicio: new Date(),
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const rolEntity = plainToInstance(Rol, rolData);
    const savedRol = await this.rolRepository.save(rolEntity);
    return plainToInstance(RolDto, savedRol, { 
      excludeExtraneousValues: true
    });
    
  }

  async update(id: number,
              rolDto: Partial<RolDto>
            ): Promise<RolDto> {
    const rolExistente = await this.rolRepository.findOne({where: {id}, }); 
    const rolPlain = instanceToPlain(rolDto);

    const rolData = {
      ... rolPlain,
      modificadoPor: 1, // TODO: implementar esto con el usuario actual
      fechaModificacion: new Date(),
    }
    Object.assign(rolExistente, rolData);
    const rolActualizado = await this.rolRepository.save(rolExistente);

    return plainToInstance(RolDto, rolActualizado, {
      excludeExtraneousValues: true,
    });

  }

  async remove(id: number): Promise<void> {
    await this.rolRepository.delete(id);
  }
}
