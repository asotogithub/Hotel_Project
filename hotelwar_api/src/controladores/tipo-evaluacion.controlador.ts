import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  Put,
  Res,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { TipoEvaluacionDto } from 'src/dto/tipo-evaluacion.dto';
import { TipoEvaluacionService } from 'src/servicios/tipo-evaluacion.servicio';
import { FileInterceptor } from '@nestjs/platform-express';
import { getAbsolutePath } from '../utilitarios/file.helper';
import { uploadConfig } from '../config/upload.config';
import { createReadStream } from 'fs';
import { extname } from 'path';
import { Response } from 'express';

@Controller('api/tipo-evaluacion')
export class TipoEvaluacionControlador {
  constructor(private readonly tipoEvaluacionService: TipoEvaluacionService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('template')
  )
  async create(
    @Body() tipoEvaluacionDto: Partial<TipoEvaluacionDto>,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: uploadConfig.allowedFileTypes,
        })
        .addMaxSizeValidator({
          maxSize: uploadConfig.maxFileSize,
        })
        .build({
          fileIsRequired: true,
        }),
    )
      file: Express.Multer.File,
  ): Promise<TipoEvaluacionDto> {
    try {
      // Agregamos la ruta del archivo al DTO
      tipoEvaluacionDto.rutaTemplate = file.path;
      return await this.tipoEvaluacionService.create(tipoEvaluacionDto);
    } catch (error) {
      // Si hay un error, intentamos eliminar el archivo subido
      if (file?.path) {
        const fs = require('fs');
        try {
          fs.unlinkSync(file.path);
        } catch (unlinkError) {
          console.error('Error al eliminar archivo temporal:', unlinkError);
        }
      }

      throw new HttpException(
        'Error al crear el tipo de Evaluacion : ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('download/:id')
  async downloadTemplate(
    @Param('id') id: string,
    @Res() res: Response, // Quitamos { passthrough: true }
  ) {
    try {
      const tipoEvaluacion = await this.tipoEvaluacionService.findOne(+id);

      if (!tipoEvaluacion || !tipoEvaluacion.rutaTemplate) {
        throw new HttpException(
          'Template no encontrado',
          HttpStatus.NOT_FOUND,
        );
      }

      const filePath = getAbsolutePath(tipoEvaluacion.rutaTemplate);
      const fileName = tipoEvaluacion.rutaTemplate.split('/').pop() || 'template';

      // Determinar el Content-Type basado en la extensión
      const ext = extname(fileName).toLowerCase();
      let contentType = 'application/octet-stream';

      switch (ext) {
        case '.pdf':
          contentType = 'application/pdf';
          break;
        case '.doc':
          contentType = 'application/msword';
          break;
        case '.docx':
          contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          break;
      }

      // Configurar los headers de la respuesta
      res.setHeader('Content-Type', contentType);
      res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);

      // Crear y enviar el stream
      const file = createReadStream(filePath);
      file.pipe(res);
    } catch (error) {
      throw new HttpException(
        'Error al descargar el template',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  async findAll(): Promise<TipoEvaluacionDto[]> {
    try {
      return await this.tipoEvaluacionService.findAll();
    } catch (error) {
      throw new HttpException(
        'Error al obtener los tipos de Evaluacion.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TipoEvaluacionDto> {
    try {
      const tipoEvaluacion = await this.tipoEvaluacionService.findOne(+id);
      if (!tipoEvaluacion) {
        throw new HttpException(
          'Tipo de Evaluacion no encontrado',
          HttpStatus.NOT_FOUND,
        );
      }
      return tipoEvaluacion;
    } catch (error) {
      throw new HttpException(
        'Error al obtener el colegio',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  @UseInterceptors(
    FileInterceptor('template')
  )
  async update(
    @Param('id') id: string,
    @Body() tipoEvaluacionDto: Partial<TipoEvaluacionDto>,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: uploadConfig.allowedFileTypes,
        })
        .addMaxSizeValidator({
          maxSize: uploadConfig.maxFileSize,
        })
        .build({
          fileIsRequired: false,
        }),
    )
      file?: Express.Multer.File,
  ): Promise<TipoEvaluacionDto> {
    try {
      // Si se subió un nuevo archivo, actualizamos la ruta
      if (file) {
        tipoEvaluacionDto.rutaTemplate = file.path;
      }

      const updatedTipoEvaluacion = await this.tipoEvaluacionService.update(
        +id,
        tipoEvaluacionDto,
      );

      if (!updatedTipoEvaluacion) {
        // Si hay error y se subió un archivo, lo eliminamos
        if (file?.path) {
          const fs = require('fs');
          try {
            fs.unlinkSync(file.path);
          } catch (unlinkError) {
            console.error('Error al eliminar archivo temporal:', unlinkError);
          }
        }
        throw new HttpException(
          'Tipo Evaluacion no encontrado',
          HttpStatus.NOT_FOUND,
        );
      }

      return updatedTipoEvaluacion;

    } catch (error) {
      // Si hay error y se subió un archivo, lo eliminamos
      if (file?.path) {
        const fs = require('fs');
        try {
          fs.unlinkSync(file.path);
        } catch (unlinkError) {
          console.error('Error al eliminar archivo temporal:', unlinkError);
        }
      }

      throw new HttpException(
        'Error al actualizar el Tipo de Evaluacion: ' + error.message,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.tipoEvaluacionService.remove(+id);
    } catch (error) {
      throw new HttpException(
        'Error al eliminar el Tipo de Evaluacion',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
