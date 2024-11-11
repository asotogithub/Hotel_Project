import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntidadesModulo } from './entidades.modulo';
import { ColegioControlador } from './controladores/colegio.controlador';
import { ColegioService } from './servicios/colegio.servicio';
import { EstudianteControlador } from './controladores/estudiante.controlador';
import { EstudianteService } from './servicios/estudiante.servicio';
import { PersonaService } from './servicios/persona.servicio';
import { UsuarioService } from './servicios/usuario.servicio';
import { UsuarioControlador } from './controladores/usuario.controlador';
import { PermisoService } from './servicios/permiso.servicio';
import { PermisoControlador } from './controladores/permiso.controlador';
import { RolControlador } from './controladores/rol.controlador';
import { RolService } from './servicios/rol.servicio';
import { TipoEvaluacionService } from './servicios/tipo-evaluacion.servicio';
import { TipoEvaluacionControlador } from './controladores/tipo-evaluacion.controlador';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { createUploadDirectories, uploadConfig } from './config/upload.config';
import { editFileName, fileFilter } from './utilitarios/file.helper';
import { ProfesionControlador } from './controladores/profesion.controlador';
import { RecursoService } from './servicios/recurso.servicio';
import { RecursoControlador } from './controladores/recurso.controlador';
import { ProfesionService } from './servicios/profesion.service';
import { AntecedenteControlador } from './controladores/antecedente.controlador';
import { AntecedenteService } from './servicios/antecedente.servicio';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dev',
      password: '',
      database: 'dev',
      schema: 'SEECADI',
      entities: [__dirname + '/entidades/*.entidad{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
    EntidadesModulo,
    MulterModule.register({
      storage: diskStorage({
        destination: uploadConfig.templatesPath,
        filename: editFileName,
      }),
      fileFilter: fileFilter,
      limits: {
        fileSize: uploadConfig.maxFileSize,
      },
    }),
  ],
  controllers: [AppController
    , ColegioControlador
    , EstudianteControlador
    , UsuarioControlador
    , PermisoControlador
    , RolControlador
    , TipoEvaluacionControlador
    , RecursoControlador
    , ProfesionControlador
    , AntecedenteControlador],
  providers: [AppService
    , ColegioService
    , EstudianteService
    , PersonaService
    , UsuarioService
    , PermisoService
    , RolService
    , TipoEvaluacionService
    , RecursoService
    , ProfesionService
    , AntecedenteService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    // Crear directorios necesarios al iniciar el módulo
    createUploadDirectories();
  }
}
