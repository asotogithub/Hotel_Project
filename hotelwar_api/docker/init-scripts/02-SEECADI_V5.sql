--
-- ER/Studio Data Architect SQL Code Generation
-- Project :      Modelo_01.DM1
--
-- Date Created : Wednesday, October 23, 2024 13:53:05
-- Target DBMS : PostgreSQL 9.x
--

-- 
-- TABLE: "SEECADI"."ANTECEDENTES" 
--

CREATE TABLE "SEECADI"."ANTECEDENTES"(
    ant_uid_pk               int4             NOT NULL,
    ant_estiduante_uid_fk    int4,
    ant_gestion              varchar(20),
    ant_descripcion          varchar(1000)    NOT NULL,
    ant_estado               varchar(5)       NOT NULL,
    ant_fecha_ini            date             NOT NULL,
    ant_fecha_fin            date,
    creado_por               int4             NOT NULL,
    fecha_creacion           timestamp        NOT NULL,
    modificado_por           int4,
    fecha_modificacion       timestamp,
    CONSTRAINT "PK_antecedentes_uid_1" PRIMARY KEY (ant_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."COLEGIOS" 
--

CREATE TABLE "SEECADI"."COLEGIOS"(
    col_uid_pk            int4            NOT NULL,
    col_codigo            varchar(20),
    col_nombre            varchar(250)    NOT NULL,
    col_num_cell          varchar(20)     NOT NULL,
    col_direccion         varchar(250),
    col_estado            varchar(5)      NOT NULL,
    col_fecha_ini         date            NOT NULL,
    col_fecha_fin         date,
    creado_por            int4            NOT NULL,
    fecha_creacion        timestamp       NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_colegios_uid" PRIMARY KEY (col_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."DISCAPACIDADES" 
--

CREATE TABLE "SEECADI"."DISCAPACIDADES"(
    dis_uid_pk            int4            NOT NULL,
    dis_codigo            varchar(20),
    dis_descripcion       varchar(250)    NOT NULL,
    dis_estado            varchar(5)      NOT NULL,
    dis_fecha_ini         date            NOT NULL,
    dis_fecha_fin         date,
    creado_por            int4            NOT NULL,
    fecha_creacion        timestamp       NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_discapacidades_uid_1" PRIMARY KEY (dis_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."EMPLEADOS" 
--

CREATE TABLE "SEECADI"."EMPLEADOS"(
    emp_uid_pk                int4            NOT NULL,
    emp_personas_uid_fk       int4,
    emp_profesiones_uid_fk    int4,
    emp_num_profesional       varchar(20),
    emp_cargo                 varchar(250)    NOT NULL,
    emp_estado                varchar(5)      NOT NULL,
    emp_fecha_ini             date            NOT NULL,
    emp_fecha_fin             date,
    creado_por                int4            NOT NULL,
    fecha_creacion            timestamp       NOT NULL,
    modificado_por            int4,
    fecha_modificacion        timestamp,
    CONSTRAINT "PK_empleados_uid" PRIMARY KEY (emp_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."ESTUDIANTE_DISCAPACIDAD" 
--

CREATE TABLE "SEECADI"."ESTUDIANTE_DISCAPACIDAD"(
    edi_uid_pk                 int4         NOT NULL,
    edi_discapacidad_uid_fk    int4,
    edi_estudiante_uid_fk      int4,
    edi_estado                varchar(5)      NOT NULL,
    edi_fecha_ini             date            NOT NULL,
    edi_fecha_fin             date,
    creado_por                 int4         NOT NULL,
    fecha_creacion             timestamp    NOT NULL,
    modificado_por             int4,
    fecha_modificacion         timestamp,
    CONSTRAINT "PK_est_discapacidad_uid_1" PRIMARY KEY (edi_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD" 
--

CREATE TABLE "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD"(
    eem_uid_pk                 int4          NOT NULL,
    eem_estudiante_uid_fk      int4,
    eem_evaluaciones_uid_fk    int4,
    eem_mod_estudios_uid_fk    int4,
    eem_fecha                  date,
    eem_estado                 varchar(5),
    creado_por                 int4          NOT NULL,
    fecha_creacion             timestamp     NOT NULL,
    modificado_por             int4,
    fecha_modificacion         timestamp,
    CONSTRAINT "PK_est_eval_modalidad_uid_1" PRIMARY KEY (eem_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."ESTUDIANTES" 
--

CREATE TABLE "SEECADI"."ESTUDIANTES"(
    est_uid_pk             int4            NOT NULL,
    est_personas_uid_fk    int4,
    est_colegios_uid_fk    int4,
    est_rude               varchar(20),
    est_nombre_tutor       varchar(250)    NOT NULL,
    est_num_cell_tutor     varchar(250)    NOT NULL,
    est_estado             varchar(5)      NOT NULL,
    est_fecha_ini          date            NOT NULL,
    est_fecha_fin          date,
    creado_por             int4            NOT NULL,
    fecha_creacion         timestamp       NOT NULL,
    modificado_por         int4,
    fecha_modificacion     timestamp,
    CONSTRAINT "PK_estudiantes_uid" PRIMARY KEY (est_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."EVALUACIONES" 
--

CREATE TABLE "SEECADI"."EVALUACIONES"(
    eva_uid_pk                      int4             NOT NULL,
    eva_tipo_evaluaciones_uid_fk    int4,
    eva_estudientes_uid_fk          int4,
    eva_administradores_uid_fk      int4,
    eva_codigo                      varchar(20),
    eva_comentarios                 varchar(2000)    ,
    eva_conclusion                  varchar(2000)    ,
    eva_recomendacion               varchar(2000)    ,
    eva_ruta_achivo                 varchar(1000),
    eva_estado                      varchar(5)       NOT NULL,
    eva_fecha_ini                   date             NOT NULL,
    eva_fecha_fin                   date,
    creado_por                      int4             NOT NULL,
    fecha_creacion                  timestamp        NOT NULL,
    modificado_por                  int4,
    fecha_modificacion              timestamp,
    CONSTRAINT "PK_evaluaciones_uid" PRIMARY KEY (eva_uid_pk)
)
;

-- 
-- TABLE: "SEECADI"."MODALIDAD_ESTUDIOS" 
--

CREATE TABLE "SEECADI"."MODALIDAD_ESTUDIOS"(
    moe_uid_pk            int4            NOT NULL,
    moe_codigo            varchar(20),
    moe_descripcion       varchar(100),
    moe_estado            varchar(5),
    moe_fecha_ini         date            NOT NULL,
    moe_fecha_fin         date            NOT NULL,
    creado_por            int4            NOT NULL,
    fecha_creacion        timestamp       NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_usuarios_uid_1_1" PRIMARY KEY (moe_uid_pk)
)
;

-- 
-- TABLE: "SEECADI"."PERMISO_RECURSOS" 
--

CREATE TABLE "SEECADI"."PERMISO_RECURSOS"(
    prr_uid_pk             int4          NOT NULL,
    prr_permisos_uid_fk    int4,
    prr_recursos_uid_fk    int4,
    prr_estado             varchar(5)    NOT NULL,
    prr_fecha_ini          date          NOT NULL,
    prr_fecha_fin          date,
    creado_por             int4          NOT NULL,
    fecha_creacion         timestamp     NOT NULL,
    modificado_por         int4,
    fecha_modificacion     timestamp,
    CONSTRAINT "PK_permiso_recursos_uid" PRIMARY KEY (prr_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."PERMISOS" 
--

CREATE TABLE "SEECADI"."PERMISOS"(
    prm_uid_pk            int4             NOT NULL,
    prm_codigo            varchar(250)     NOT NULL,
    prm_descripcion       varchar(1000),
    prm_estado            varchar(5)       NOT NULL,
    prm_fecha_ini         date             NOT NULL,
    prm_fecha_fin         date,
    creado_por            int4             NOT NULL,
    fecha_creacion        date             NOT NULL,
    modificado_por        int4,
    fecha_modificacion    date,
    CONSTRAINT "PK_permisos_uid" PRIMARY KEY (prm_uid_pk)
)
;


-- 
-- TABLE: "SEECADI"."PERSONAS" 
--

CREATE TABLE "SEECADI"."PERSONAS"(
    per_uid_pk              int4            NOT NULL,
    "per_CI"                varchar(20),
    per_nombres             varchar(250)    NOT NULL,
    per_apellido_paterno    varchar(250)    NOT NULL,
    per_apellido_materno    varchar(250),
    per_email               varchar(250),
    per_fecha_nacimiento    date,
    per_genero              varchar(20),
    per_estado              varchar(5)      NOT NULL,
    per_fecha_ini           date            NOT NULL,
    per_fecha_fin           date,
    creado_por              int8            NOT NULL,
    fecha_creacion          timestamp       NOT NULL,
    modificado_por          int8,
    fecha_modificacion      timestamp,
    CONSTRAINT "PK_personas_uid" PRIMARY KEY (per_uid_pk)
)
;

-- 
-- TABLE: "SEECADI"."PROFESIONES" 
--

CREATE TABLE "SEECADI"."PROFESIONES"(
    prf_uid_pk            int4            NOT NULL,
    prf_codigo            varchar(20),
    prf_nombre            varchar(250)    NOT NULL,
    prf_estado            varchar(5)      NOT NULL,
    prf_fecha_ini         date            NOT NULL,
    prf_fecha_fin         date,
    creado_por            int4            NOT NULL,
    fecha_creacion        timestamp       NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_profesionales_uid" PRIMARY KEY (prf_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."RECURSOS" 
--

CREATE TABLE "SEECADI"."RECURSOS"(
    rec_uid_pk            int4             NOT NULL,
    rec_nombre            varchar(250)     NOT NULL,
    rec_direccion         varchar(1000),
    rec_estado            varchar(5)       NOT NULL,
    rec_fecha_ini         date             NOT NULL,
    rec_fecha_fin         date,
    creado_por            int4             NOT NULL,
    fecha_creacion        timestamp        NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_recursos" PRIMARY KEY (rec_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."ROL_PERMISOS" 
--

CREATE TABLE "SEECADI"."ROL_PERMISOS"(
    rlp_uid_pk             int4          NOT NULL,
    rlp_roles_uid_fk       int4,
    rlp_permisos_uid_fk    int4,
    rlp_estado             varchar(5)    NOT NULL,
    rlp_fecha_ini          date          NOT NULL,
    rlp_fecha_fin          date,
    creado_por             int4          NOT NULL,
    fecha_creacion         date          NOT NULL,
    modificado_por         int4,
    fecha_modificacion     date,
    CONSTRAINT "PK_rol_permisos_uid" PRIMARY KEY (rlp_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."ROLES" 
--

CREATE TABLE "SEECADI"."ROLES"(
    rol_uid_pk            int4             NOT NULL,
    rol_codigo            varchar(250)     NOT NULL,
    rol_descripcion       varchar(1000),
    rol_estado            varchar(5)       NOT NULL,
    rol_fecha_ini         date             NOT NULL,
    rol_fecha_fin         date,
    creado_por            int4             NOT NULL,
    fecha_creacion        timestamp        NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_roles_uid" PRIMARY KEY (rol_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."TH_LOGIN" 
--

CREATE TABLE "SEECADI"."TH_LOGIN"(
    thl_uid_pk            int4         NOT NULL,
    "thl_users_uid-fk"    int4,
    thl_fecha             date         NOT NULL,
    creado_por            int4         NOT NULL,
    fecha_creacion        timestamp    NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_usuarios_uid_1" PRIMARY KEY (thl_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."TIPO_EVALUACIONES" 
--

CREATE TABLE "SEECADI"."TIPO_EVALUACIONES"(
    tev_uid_pk            int4             NOT NULL,
    tev_nombre            varchar(20),
    tev_ruta_template     varchar(1000),
    tev_orden             int4,
    tev_obligatorio       varchar(5),
    tev_estado            varchar(5)       NOT NULL,
    tev_fecha_ini         date             NOT NULL,
    tev_fecha_fin         date,
    creado_por            int4             NOT NULL,
    fecha_creacion        timestamp        NOT NULL,
    modificado_por        int4,
    fecha_modificacion    timestamp,
    CONSTRAINT "PK_tipo_evaluaciones_uid" PRIMARY KEY (tev_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."USUARIO_ROLES" 
--

CREATE TABLE "SEECADI"."USUARIO_ROLES"(
    urr_uid_pk             int4          NOT NULL,
    urr_roles_uid_fk       int4,
    urr_usuarios_uid_fk    int4,
    urr_estado             varchar(5)    NOT NULL,
    urr_fecha_ini          date          NOT NULL,
    urr_fecha_fin          date,
    creado_por             int4          NOT NULL,
    fecha_creacion         timestamp     NOT NULL,
    modificado_por         int4,
    fecha_modificacion     timestamp,
    CONSTRAINT "PK_usuario_roles_uid" PRIMARY KEY (urr_uid_pk)
)
;



-- 
-- TABLE: "SEECADI"."USUARIOS" 
--

CREATE TABLE "SEECADI"."USUARIOS"(
    usr_uid_pk             int4            NOT NULL,
    usr_personas_uid_fk    int4,
    usr_name               varchar(250)    NOT NULL,
    usr_clave              varchar(250)    NOT NULL,
    usr_email              varchar(250),
    usr_estado             varchar(5)      NOT NULL,
    usr_fecha_ini          date            NOT NULL,
    usr_fecha_fin          date,
    creado_por             int4            NOT NULL,
    fecha_creacion         timestamp       NOT NULL,
    modificado_por         int4,
    fecha_modificacion     timestamp,
    CONSTRAINT "PK_usuarios_uid" PRIMARY KEY (usr_uid_pk)
)
;

-- 
-- INDEX: "Ref827" 
--

CREATE INDEX "Ref827" ON "SEECADI"."ANTECEDENTES"(ant_estiduante_uid_fk)
;

-- 
-- INDEX: "Ref912" 
--

CREATE INDEX "Ref912" ON "SEECADI"."EMPLEADOS"(emp_personas_uid_fk)
;
-- 
-- INDEX: "Ref1213" 
--

CREATE INDEX "Ref1213" ON "SEECADI"."EMPLEADOS"(emp_profesiones_uid_fk)
;
-- 
-- INDEX: "Ref1625" 
--

CREATE INDEX "Ref1625" ON "SEECADI"."ESTUDIANTE_DISCAPACIDAD"(edi_discapacidad_uid_fk)
;
-- 
-- INDEX: "Ref826" 
--

CREATE INDEX "Ref826" ON "SEECADI"."ESTUDIANTE_DISCAPACIDAD"(edi_estudiante_uid_fk)
;
-- 
-- INDEX: "Ref1328" 
--

CREATE INDEX "Ref1328" ON "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD"(eem_evaluaciones_uid_fk)
;
-- 
-- INDEX: "Ref829" 
--

CREATE INDEX "Ref829" ON "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD"(eem_estudiante_uid_fk)
;
-- 
-- INDEX: "Ref2030" 
--

CREATE INDEX "Ref2030" ON "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD"(eem_mod_estudios_uid_fk)
;
-- 
-- INDEX: "Ref1110" 
--
-- 
-- INDEX: "Ref1110" 
--

CREATE INDEX "Ref1110" ON "SEECADI"."ESTUDIANTES"(est_colegios_uid_fk)
;
-- 
-- INDEX: "Ref911" 
--

CREATE INDEX "Ref911" ON "SEECADI"."ESTUDIANTES"(est_personas_uid_fk)
;
-- 
-- INDEX: "Ref1414" 
--

CREATE INDEX "Ref1414" ON "SEECADI"."EVALUACIONES"(eva_tipo_evaluaciones_uid_fk)
;
-- 
-- INDEX: "Ref815" 
--

CREATE INDEX "Ref815" ON "SEECADI"."EVALUACIONES"(eva_estudientes_uid_fk)
;
-- 
-- INDEX: "Ref1023" 
--

CREATE INDEX "Ref1023" ON "SEECADI"."EVALUACIONES"(eva_administradores_uid_fk)
;
-- 
-- INDEX: "Ref32" 
--

CREATE INDEX "Ref32" ON "SEECADI"."PERMISO_RECURSOS"(prr_permisos_uid_fk)
;
-- 
-- INDEX: "Ref43" 
--

CREATE INDEX "Ref43" ON "SEECADI"."PERMISO_RECURSOS"(prr_recursos_uid_fk)
;
-- 
-- INDEX: "Ref24" 
--

CREATE INDEX "Ref24" ON "SEECADI"."ROL_PERMISOS"(rlp_roles_uid_fk)
;
-- 
-- INDEX: "Ref35" 
--

CREATE INDEX "Ref35" ON "SEECADI"."ROL_PERMISOS"(rlp_permisos_uid_fk)
;
-- 
-- INDEX: "Ref124" 
--

CREATE INDEX "Ref124" ON "SEECADI"."TH_LOGIN"("thl_users_uid-fk")
;
-- 
-- INDEX: "Ref26" 
--

CREATE INDEX "Ref26" ON "SEECADI"."USUARIO_ROLES"(urr_roles_uid_fk)
;
-- 
-- INDEX: "Ref19" 
--

CREATE INDEX "Ref19" ON "SEECADI"."USUARIO_ROLES"(urr_usuarios_uid_fk)
;
-- 
-- INDEX: "Ref922" 
--

CREATE INDEX "Ref922" ON "SEECADI"."USUARIOS"(usr_personas_uid_fk)
;
-- 
-- TABLE: "SEECADI"."ADMINISTRADORES" 
--

ALTER TABLE "SEECADI"."ANTECEDENTES" ADD CONSTRAINT "RefESTUDIANTES27" 
    FOREIGN KEY (ant_estiduante_uid_fk)
    REFERENCES "SEECADI"."ESTUDIANTES"(est_uid_pk)
;


-- 
-- TABLE: "SEECADI"."EMPLEADOS" 
--

ALTER TABLE "SEECADI"."EMPLEADOS" ADD CONSTRAINT "RefPERSONAS12" 
    FOREIGN KEY (emp_personas_uid_fk)
    REFERENCES "SEECADI"."PERSONAS"(per_uid_pk)
;

ALTER TABLE "SEECADI"."EMPLEADOS" ADD CONSTRAINT "RefPROFESIONES13" 
    FOREIGN KEY (emp_profesiones_uid_fk)
    REFERENCES "SEECADI"."PROFESIONES"(prf_uid_pk)
;


-- 
-- TABLE: "SEECADI"."ESTUDIANTE_DISCAPACIDAD" 
--

ALTER TABLE "SEECADI"."ESTUDIANTE_DISCAPACIDAD" ADD CONSTRAINT "RefDISCAPACIDADES25" 
    FOREIGN KEY (edi_discapacidad_uid_fk)
    REFERENCES "SEECADI"."DISCAPACIDADES"(dis_uid_pk)
;

ALTER TABLE "SEECADI"."ESTUDIANTE_DISCAPACIDAD" ADD CONSTRAINT "RefESTUDIANTES26" 
    FOREIGN KEY (edi_estudiante_uid_fk)
    REFERENCES "SEECADI"."ESTUDIANTES"(est_uid_pk)
;


-- 
-- TABLE: "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD" 
--

ALTER TABLE "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD" ADD CONSTRAINT "RefEVALUACIONES28" 
    FOREIGN KEY (eem_evaluaciones_uid_fk)
    REFERENCES "SEECADI"."EVALUACIONES"(eva_uid_pk)
;

ALTER TABLE "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD" ADD CONSTRAINT "RefESTUDIANTES29" 
    FOREIGN KEY (eem_estudiante_uid_fk)
    REFERENCES "SEECADI"."ESTUDIANTES"(est_uid_pk)
;

ALTER TABLE "SEECADI"."ESTUDIANTE_EVAL_MODALIDAD" ADD CONSTRAINT "RefMODALIDAD_ESTUDIOS30" 
    FOREIGN KEY (eem_mod_estudios_uid_fk)
    REFERENCES "SEECADI"."MODALIDAD_ESTUDIOS"(moe_uid_pk)
;


-- 
-- TABLE: "SEECADI"."ESTUDIANTES" 
--

ALTER TABLE "SEECADI"."ESTUDIANTES" ADD CONSTRAINT "RefCOLEGIOS10" 
    FOREIGN KEY (est_colegios_uid_fk)
    REFERENCES "SEECADI"."COLEGIOS"(col_uid_pk)
;

ALTER TABLE "SEECADI"."ESTUDIANTES" ADD CONSTRAINT "RefPERSONAS11" 
    FOREIGN KEY (est_personas_uid_fk)
    REFERENCES "SEECADI"."PERSONAS"(per_uid_pk)
;


-- 
-- TABLE: "SEECADI"."EVALUACIONES" 
--

ALTER TABLE "SEECADI"."EVALUACIONES" ADD CONSTRAINT "RefTIPO_EVALUACIONES14" 
    FOREIGN KEY (eva_tipo_evaluaciones_uid_fk)
    REFERENCES "SEECADI"."TIPO_EVALUACIONES"(tev_uid_pk)
;

ALTER TABLE "SEECADI"."EVALUACIONES" ADD CONSTRAINT "RefESTUDIANTES15" 
    FOREIGN KEY (eva_estudientes_uid_fk)
    REFERENCES "SEECADI"."ESTUDIANTES"(est_uid_pk)
;

ALTER TABLE "SEECADI"."EVALUACIONES" ADD CONSTRAINT "RefADMINISTRADORES23" 
    FOREIGN KEY (eva_administradores_uid_fk)
    REFERENCES "SEECADI"."ADMINISTRADORES"(adm_uid_pk)
;


-- 
-- TABLE: "SEECADI"."PERMISO_RECURSOS" 
--

ALTER TABLE "SEECADI"."PERMISO_RECURSOS" ADD CONSTRAINT "RefPERMISOS2" 
    FOREIGN KEY (prr_permisos_uid_fk)
    REFERENCES "SEECADI"."PERMISOS"(prm_uid_pk)
;

ALTER TABLE "SEECADI"."PERMISO_RECURSOS" ADD CONSTRAINT "RefRECURSOS3" 
    FOREIGN KEY (prr_recursos_uid_fk)
    REFERENCES "SEECADI"."RECURSOS"(rec_uid_pk)
;


-- 
-- TABLE: "SEECADI"."ROL_PERMISOS" 
--

ALTER TABLE "SEECADI"."ROL_PERMISOS" ADD CONSTRAINT "RefROLES4" 
    FOREIGN KEY (rlp_roles_uid_fk)
    REFERENCES "SEECADI"."ROLES"(rol_uid_pk)
;

ALTER TABLE "SEECADI"."ROL_PERMISOS" ADD CONSTRAINT "RefPERMISOS5" 
    FOREIGN KEY (rlp_permisos_uid_fk)
    REFERENCES "SEECADI"."PERMISOS"(prm_uid_pk)
;


-- 
-- TABLE: "SEECADI"."TH_LOGIN" 
--

ALTER TABLE "SEECADI"."TH_LOGIN" ADD CONSTRAINT "RefUSUARIOS24" 
    FOREIGN KEY ("thl_users_uid-fk")
    REFERENCES "SEECADI"."USUARIOS"(usr_uid_pk)
;


-- 
-- TABLE: "SEECADI"."USUARIO_ROLES" 
--

ALTER TABLE "SEECADI"."USUARIO_ROLES" ADD CONSTRAINT "RefROLES6" 
    FOREIGN KEY (urr_roles_uid_fk)
    REFERENCES "SEECADI"."ROLES"(rol_uid_pk)
;

ALTER TABLE "SEECADI"."USUARIO_ROLES" ADD CONSTRAINT "RefUSUARIOS9" 
    FOREIGN KEY (urr_usuarios_uid_fk)
    REFERENCES "SEECADI"."USUARIOS"(usr_uid_pk)
;


-- 
-- TABLE: "SEECADI"."USUARIOS" 
--

ALTER TABLE "SEECADI"."USUARIOS" ADD CONSTRAINT "RefPERSONAS22" 
    FOREIGN KEY (usr_personas_uid_fk)
    REFERENCES "SEECADI"."PERSONAS"(per_uid_pk)
;


