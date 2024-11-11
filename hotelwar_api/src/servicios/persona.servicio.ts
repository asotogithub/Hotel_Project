import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from '../entidades/persona.entidad';
import { PersonaDto } from '../dto/persona.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private personaRepository: Repository<Persona>,
  ) {}

  async findAll(): Promise<PersonaDto[]> {
    const personas = await this.personaRepository.find();
    return plainToInstance(PersonaDto, personas);
  }

  async findOne(id: number): Promise<PersonaDto> {
    const persona = this.personaRepository.findOne({ where: { id } });
    return plainToInstance(PersonaDto, persona);
  }

  async create(personaDto: Partial<PersonaDto>): Promise<PersonaDto> {
    const personaPlain = plainToInstance(Persona, personaDto);
    const personaData = {
      ...personaPlain,
      fechaInicio: new Date(), // Establecer la fecha de inicio como la fecha actual
      creadoPor: 1, // TODO implementar esto
      fechaCreacion: new Date(),
      estado: 'A',
    };

    const personaEntity = plainToInstance(Persona, personaData);
    const savedPersona = await this.personaRepository.save(personaEntity);

    return plainToInstance(PersonaDto, savedPersona, {
      excludeExtraneousValues: true,
    });
  }

  async update(id: number, persona: Partial<Persona>): Promise<Persona> {
    await this.personaRepository.update(id, persona);
    return this.personaRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.personaRepository.delete(id);
  }
}
