import{
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    HttpException,
    HttpStatus
} from '@nestjs/common';
import { UsuarioService } from 'src/servicios/usuario.servicio';
import { UsuarioDto } from 'src/dto/usuario.dto';
import { error } from 'console';

@Controller('api/usuarios') 
export class UsuarioControlador{
    constructor(private readonly usuarioService: UsuarioService){}

    @Post()
    async create(@Body() usuarioDto: Partial<UsuarioDto>):Promise<UsuarioDto> {
        try{
            return await this.usuarioService.create(usuarioDto);

        } catch(error) {
            throw new HttpException(
                'Error al crear el Usuario.',
                HttpStatus.BAD_REQUEST,
            );
        }
    }

    @Get()
    async findAll(): Promise<UsuarioDto[]> {
      try {
        return await this.usuarioService.findAll();
      } catch (error) {
        throw new HttpException(
          'Error al obtener los Usuarios',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UsuarioDto> {
    try {
      const usuario = await this.usuarioService.findOne(+id);
      if (!usuario) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      return usuario;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() usuarioDto: Partial<UsuarioDto>,
  ): Promise<UsuarioDto> {
    try {
      const updatedUsuario = await this.usuarioService.update(+id, usuarioDto);
      if (!updatedUsuario) {
        throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
      }
      return updatedUsuario;
    } catch (error) {
      throw new HttpException(
        'Error al actualizar el Usuario',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.usuarioService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar el usuario',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

}
