
-- ADMINISTRADORES
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_ADMINISTRADORES" BEFORE INSERT ON "SEECADI"."ADMINISTRADORES"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('ADMINISTRADORES');
	
	
-- COLEGIOS
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_COLEGIOS" BEFORE INSERT ON "SEECADI"."COLEGIOS"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('COLEGIOS');
	
-- ESTUDIANTES
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_ESTUDIANTES" BEFORE INSERT ON "SEECADI"."ESTUDIANTES"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('ESTUDIANTES');
	
-- EVALUACIONES
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_EVALUACIONES" BEFORE INSERT ON "SEECADI"."EVALUACIONES"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('EVALUACIONES');
	
-- PERMISOS
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_PERMISOS" BEFORE INSERT ON "SEECADI"."PERMISOS"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('PERMISOS');
	
-- PERMISO_RECURSOS
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_PERMISO_RECURSOS" BEFORE INSERT ON "SEECADI"."PERMISO_RECURSOS"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('PERMISO_RECURSOS');
	
-- PERSONAS
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_PERSONAS" BEFORE INSERT ON "SEECADI"."PERSONAS"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('PERSONAS');
	
-- PROFESIONES
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_PROFESIONES" BEFORE INSERT ON "SEECADI"."PROFESIONES"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('PROFESIONES');
	
-- RECURSOS
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_RECURSOS" BEFORE INSERT ON "SEECADI"."RECURSOS"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('RECURSOS');
	
-- ROLES
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_ROLES" BEFORE INSERT ON "SEECADI"."ROLES"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('ROLES');	
	
	
-- ROL_PERMISOS
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_ROL_PERMISOS" BEFORE INSERT ON "SEECADI"."ROL_PERMISOS"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('ROL_PERMISOS');		
	
	
-- TIPO_EVALUACIONES
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_TIPO_EVALUACIONES" BEFORE INSERT ON "SEECADI"."TIPO_EVALUACIONES"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('TIPO_EVALUACIONES');		
	
-- USUARIOS
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_USUARIOS" BEFORE INSERT ON "SEECADI"."USUARIOS"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('USUARIOS');		

-- USUARIO_ROLES
CREATE OR REPLACE TRIGGER "SEECADI.TRG_INS_USUARIO_ROLES" BEFORE INSERT ON "SEECADI"."USUARIO_ROLES"
  FOR EACH ROW
    
	EXECUTE PROCEDURE "SEECADI".FN_INS_TABLES('USUARIO_ROLES');	