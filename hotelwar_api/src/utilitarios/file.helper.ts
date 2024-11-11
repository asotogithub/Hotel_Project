import { HttpException, HttpStatus } from '@nestjs/common';
import { extname, join } from 'path';
import { uploadConfig } from '../config/upload.config';

export const fileFilter = (req: Express.Request, file: Express.Multer.File, callback: Function) => {
  if (!file.originalname.match(uploadConfig.allowedFileTypes)) {
    return callback(
      new HttpException(
        'Solo se permiten archivos PDF y DOC/DOCX',
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  }
  callback(null, true);
};

export const editFileName = (req: Express.Request, file: Express.Multer.File, callback: Function) => {
  // Obtener la extensión del archivo
  const fileExtName = extname(file.originalname);

  // Generar un nombre aleatorio
  const randomName = Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

  // Agregar timestamp para mayor unicidad
  const timestamp = Date.now();

  callback(null, `template_${timestamp}_${randomName}${fileExtName}`);
};

// Función para obtener la ruta relativa del archivo
export const getRelativePath = (absolutePath: string): string => {
  return absolutePath.replace(uploadConfig.basePath, '').replace(/\\/g, '/');
};

// Función para obtener la ruta absoluta del archivo
export const getAbsolutePath = (relativePath: string): string => {
  if (!relativePath) return '';
  return join(uploadConfig.basePath, relativePath);
};