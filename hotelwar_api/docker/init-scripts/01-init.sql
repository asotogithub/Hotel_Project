-- 01-init.sql
-- Crear el schema SEECADI
CREATE SCHEMA IF NOT EXISTS "SEECADI" AUTHORIZATION dev;

-- Establecer el schema SEECADI como predeterminado para el usuario dev
ALTER USER dev SET search_path TO "SEECADI";

-- Otorgar todos los privilegios sobre el schema al usuario dev
GRANT ALL PRIVILEGES ON SCHEMA "SEECADI" TO dev;

-- Agregar comentario a la base de datos
COMMENT ON DATABASE dev IS 'test project joaquin';