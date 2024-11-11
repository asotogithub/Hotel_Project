import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from '../entidades/estudiante.entidad';
import { EstudianteDto } from '../dto/estudiante.dto';
import { plainToInstance } from 'class-transformer';
import { PersonaService } from './persona.servicio';

@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
    private personaService: PersonaService,
  ) {}

  async findAll(): Promise<EstudianteDto[]> {
    const estudiantes = await this.estudianteRepository.find({
      relations: ['persona'],
    });
    return plainToInstance(EstudianteDto, estudiantes);
  }

  async findOne(id: number): Promise<EstudianteDto> {
    const estudiante = await this.estudianteRepository.findOne({
      where: { id },
      relations: ['persona'],
    });
    return plainToInstance(EstudianteDto, estudiante);
  }

  async create(estudianteDto: Partial<EstudianteDto>): Promise<EstudianteDto> {
    // 1. Guardamos Persona
    const persona = await this.personaService.create(estudianteDto.persona);
    console.log('persona.id :: ' + persona.id);

    // 2. Preparamos los datos del estudiante
    const estudianteData = {
      ...estudianteDto,
      personaId: persona.id,
      persona: {
        id: persona.id,
      },
      fechaInicio: new Date(),
      creadoPor: 1, // TODO: implementar esto
      fechaCreacion: new Date(),
    };

    // 3. Creamos la entidad Estudiante
    const estudianteEntity = plainToInstance(Estudiante, estudianteData);

    // 4. Guardamos el estudiante
    const savedEstudiante =
      await this.estudianteRepository.save(estudianteEntity);
    const estudiante = await this.estudianteRepository.findOne({
      where: { id: savedEstudiante.id },
      relations: ['persona'],
    });

    // 5. Retornamos el DTO del estudiante
    return plainToInstance(EstudianteDto, estudiante, {
      excludeExtraneousValues: true,
    });
  }

  async update(
    id: number,
    estudianteDto: Partial<EstudianteDto>,
  ): Promise<EstudianteDto> {
    await this.estudianteRepository.update(id, estudianteDto);
    const updatedEstudiante = await this.estudianteRepository.findOne({
      where: { id },
      relations: ['persona'],
    });
    return plainToInstance(EstudianteDto, updatedEstudiante);
  }

  async remove(id: number): Promise<void> {
    await this.estudianteRepository.delete(id);
  }
}
