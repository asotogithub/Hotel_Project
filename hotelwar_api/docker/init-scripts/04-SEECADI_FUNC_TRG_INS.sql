CREATE OR REPLACE FUNCTION "SEECADI".FN_INS_TABLES() RETURNS TRIGGER
AS
$$
DECLARE
  referer_tab Text;
BEGIN
 referer_tab := TG_ARGV[0];
  IF referer_tab = 'COLEGIOS' THEN
    NEW.col_estado := 'A';
    NEW.col_fecha_ini := current_date;
  ELSIF referer_tab = 'ESTUDIANTES' THEN
    NEW.est_estado := 'A';
    NEW.est_fecha_ini := current_date;
  ELSIF referer_tab = 'EMPLEADOS' THEN
    NEW.emp_estado := 'A';
    NEW.emp_fecha_ini := current_date;
  ELSIF referer_tab = 'EVALUACIONES' THEN
  --  NEW.eva_estado := 'A';
    NEW.eva_fecha_ini := current_date;
  ELSIF referer_tab = 'PERMISOS' THEN
    NEW.prm_estado := 'A';
    NEW.prm_fecha_ini := current_date;
  ELSIF referer_tab = 'PERMISO_RECURSOS' THEN
    NEW.prr_estado := 'A';
    NEW.prr_fecha_ini := current_date;	
  ELSIF referer_tab = 'PERSONAS' THEN
    NEW.per_estado := 'A';
    NEW.per_fecha_ini := current_date;
  ELSIF referer_tab = 'PROFESIONES' THEN
    NEW.prf_estado := 'A';
    NEW.prf_fecha_ini := current_date;
  ELSIF referer_tab = 'RECURSOS' THEN
    NEW.rec_estado := 'A';
    NEW.rec_fecha_ini := current_date;
  ELSIF referer_tab = 'ROLES' THEN
    NEW.rol_estado := 'A';
    NEW.rol_fecha_ini := current_date;
  ELSIF referer_tab = 'ROL_PERMISOS' THEN
    NEW.rlp_estado := 'A';
    NEW.rlp_fecha_ini := current_date;		
  ELSIF referer_tab = 'TIPO_EVALUACIONES' THEN
    NEW.tev_estado := 'A';
    NEW.tev_fecha_ini := current_date;
  ELSIF referer_tab = 'USUARIOS' THEN
    NEW.usr_estado := 'A';
    NEW.usr_fecha_ini := current_date;
  ELSIF referer_tab = 'USUARIO_ROLES' THEN
    NEW.urr_estado := 'A';
    NEW.urr_fecha_ini := current_date;	
  ELSIF referer_tab = 'ANTECEDENTES' THEN
    NEW.ant_estado := 'A';
    NEW.ant_fecha_ini := current_date;
  ELSIF referer_tab = 'DISCAPACIDADES' THEN
    NEW.dis_estado := 'A';
    NEW.dis_fecha_ini := current_date;
  ELSIF referer_tab = 'ESTUDIANTE_DISCAPACIDAD' THEN
    NEW.edi_estado := 'A';
    NEW.edi_fecha_ini := current_date; 
  ELSIF referer_tab = 'ESTUDIANTE_EVAL_MODALIDAD' THEN
    NEW.eem_estado := 'A';
  ELSIF referer_tab = 'MODALIDAD_ESTUDIOS' THEN
    NEW.moe_estado := 'A';
    NEW.moe_fecha_ini := current_date;         	
  ELSE
    NULL;
  END IF;

  NEW.fecha_creacion := NOW();
  NEW.modificado_por := NEW.creado_por;
  NEW.fecha_modificacion := NOW();
  
  RETURN NEW;
END
$$
Language plpgsql;