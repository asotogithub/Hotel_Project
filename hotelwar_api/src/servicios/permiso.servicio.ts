import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permiso } from '../entidades/permiso.entidad';
import { PermisoDto } from 'src/dto/permiso.dto';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { error } from 'console';

@Injectable()
export class PermisoService {
  constructor(
    @InjectRepository(Permiso)
    private permisoRepository: Repository<Permiso>,
  ) {}

  async findAll(): Promise<PermisoDto[]> {
    const permisos = await this.permisoRepository.find();

    return plainToInstance(PermisoDto, permisos);
  }

  async findOne(id: number): Promise<PermisoDto> {
    const permiso = await this.permisoRepository.findOne({where: {id}});

    return plainToInstance(PermisoDto, permiso);
  }

  async create(permisoDto: Partial<PermisoDto>): Promise<PermisoDto> {
    const permisoPlain = instanceToPlain(permisoDto);
    const permisoData = {
      ... permisoPlain,
      fechaInicio: new Date(),
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
    };

    const permisoEntity = plainToInstance(Permiso, permisoData);
    const savedPermiso = await this.permisoRepository.save(permisoEntity);
    return plainToInstance(PermisoDto, savedPermiso, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, 
               permisoDto: Partial<PermisoDto>,
              ): Promise<PermisoDto> {
    
    const permisoExistente = await this.permisoRepository.findOne({
          where: { id },
        });
    
    if (!permisoExistente) {
       throw new Error('Permiso no encontrado.');
    }
    
    const permisoPain = instanceToPlain(permisoDto);
    const permisoData = {
      ... permisoPain,
      modificadoPor: 1, // TODO: implementar esto con el usuario actual
      fechaModificacion: new Date(),
    };

    Object.assign(permisoExistente, permisoData);
    const permisoActualizado = await this.permisoRepository.save(permisoExistente);
    
    return plainToInstance(PermisoDto, permisoActualizado, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: number): Promise<void> {
    await this.permisoRepository.delete(id);
  }
}
