import { join } from 'path';

// Obtener la ruta base de los uploads desde variables de entorno
const getUploadBasePath = (): string => {
  const uploadPath = process.env.UPLOAD_PATH || 'D:\\uploads'; // Ruta por defecto para Windows
  return uploadPath;
};

export const uploadConfig = {
  // Ruta base para todos los uploads
  basePath: getUploadBasePath(),

  // Ruta específica para templates de evaluaciones
  templatesPath: join(getUploadBasePath(), 'templates'),

  // Tamaño máximo de archivo (5MB)
  maxFileSize: 5 * 1024 * 1024,

  // Tipos de archivo permitidos
  allowedFileTypes: /(pdf|doc|docx)$/,
};

// Función para crear los directorios necesarios
export const createUploadDirectories = (): void => {
  const fs = require('fs');

  // Crear directorio base si no existe
  if (!fs.existsSync(uploadConfig.basePath)) {
    fs.mkdirSync(uploadConfig.basePath, { recursive: true });
  }

  // Crear directorio de templates si no existe
  if (!fs.existsSync(uploadConfig.templatesPath)) {
    fs.mkdirSync(uploadConfig.templatesPath, { recursive: true });
  }
};