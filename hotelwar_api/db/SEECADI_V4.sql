--
-- ER/Studio Data Architect SQL Code Generation
-- Project :      Modelo_01.DM1
--
-- Date Created : Thursday, October 10, 2024 21:51:10
-- Target DBMS : PostgreSQL 9.x
--

--
-- TABLE: "public"."ADMINISTRADORES"
--

CREATE TABLE "public"."ADMINISTRADORES"(
                                            adm_uid_pk                int4            NOT NULL,
                                            adm_personas_uid_fk       int8,
                                            adm_profesiones_uid_fk    int4,
                                            adm_num_profesional       varchar(20),
                                            adm_cargo                 varchar(250)    NOT NULL,
                                            adm_estado                varchar(5)      NOT NULL,
                                            adm_fecha_ini             date            NOT NULL,
                                            adm_fecha_fin             date,
                                            creado_por                int4            NOT NULL,
                                            fecha_creacion            timestamp       NOT NULL,
                                            modificado_por            int4,
                                            fecha_modificacion        timestamp,
                                            CONSTRAINT "PK_administradores_uid" PRIMARY KEY (adm_uid_pk)
)
;

--
-- TABLE: "public"."COLEGIOS"
--

CREATE TABLE "public"."COLEGIOS"(
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
-- TABLE: "public"."ESTUDIANTES"
--

CREATE TABLE "public"."ESTUDIANTES"(
                                        est_uid_pk             int4            NOT NULL,
                                        est_personas_uid_fk    int8,
                                        est_colegios_uid_fk    int4,
                                        "est_RUA"              varchar(20),
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
-- TABLE: "public"."EVALUACIONES"
--

CREATE TABLE "public"."EVALUACIONES"(
                                         eva_uid_pk                      int4             NOT NULL,
                                         eva_tipo_evaluaciones_uid_fk    int4,
                                         eva_estudientes_uid_fk          int4,
                                         eva_administradores_uid_fk      int4,
                                         eva_codigo                      varchar(20),
                                         eva_comentarios                 varchar(1000)    NOT NULL,
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
-- TABLE: "public"."PERMISO_RECURSOS"
--

CREATE TABLE "public"."PERMISO_RECURSOS"(
                                             prr_uid_pk             int4          NOT NULL,
                                             prr_permisos_uid_fk    int4          NOT NULL,
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
-- TABLE: "public"."PERMISOS"
--

CREATE TABLE "public"."PERMISOS"(
                                     per_uid_pk            int4             NOT NULL,
                                     per_codigo            varchar(250)     NOT NULL,
                                     per_descripcion       varchar(1000),
                                     per_estado            varchar(5)       NOT NULL,
                                     per_fecha_ini         date             NOT NULL,
                                     per_fecha_fin         date,
                                     creado_por            int4             NOT NULL,
                                     fecha_creacion        date             NOT NULL,
                                     modificado_por        int4,
                                     fecha_modificacion    date,
                                     CONSTRAINT "PK_permisos_uid" PRIMARY KEY (per_uid_pk)
)
;

--
-- TABLE: "public"."PERSONAS"
--

CREATE TABLE "public"."PERSONAS"(
                                     per_uid_pk              int8            NOT NULL,
                                     "per_CI"                varchar(20),
                                     per_nombres             varchar(250)    NOT NULL,
                                     "per_apellido Paterno"  varchar(250)    NOT NULL,
                                     per_apellido_materno    varchar(250),
                                     per_email               varchar(250),
                                     per_fecha_nacimiento    date,
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
-- TABLE: "public"."PROFESIONES"
--

CREATE TABLE "public"."PROFESIONES"(
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
-- TABLE: "public"."RECURSOS"
--

CREATE TABLE "public"."RECURSOS"(
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
-- TABLE: "public"."ROL_PERMISOS"
--

CREATE TABLE "public"."ROL_PERMISOS"(
                                         rlp_uid_pk             int4          NOT NULL,
                                         rlp_roles_uid_fk       int4,
                                         rlp_permisos_uid_fk    int4,
                                         rlp_estado             varchar(5)    NOT NULL,
                                         rlp_fecha_ini          date          NOT NULL,
                                         rlp_fecha_fin          date,
                                         creado_por             int4          NOT NULL,
                                         fecha_creacion         timestamp     NOT NULL,
                                         modificado_por         int4,
                                         fecha_modificacion     timestamp,
                                         CONSTRAINT "PK_rol_permisos_uid" PRIMARY KEY (rlp_uid_pk)
)
;

--
-- TABLE: "public"."ROLES"
--

CREATE TABLE "public"."ROLES"(
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
-- TABLE: "public"."TH_LOGIN"
--

CREATE TABLE "public"."TH_LOGIN"(
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
-- TABLE: "public"."TIPO_EVALUACIONES"
--

CREATE TABLE "public"."TIPO_EVALUACIONES"(
                                              tev_uid_pk            int4             NOT NULL,
                                              tev_nombre            varchar(20),
                                              tev_ruta_template     varchar(1000),
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
-- TABLE: "public"."USUARIO_ROLES"
--

CREATE TABLE "public"."USUARIO_ROLES"(
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
-- TABLE: "public"."USUARIOS"
--

CREATE TABLE "public"."USUARIOS"(
                                     usr_uid_pk             int4            NOT NULL,
                                     usr_personas_uid_fk    int8,
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
-- INDEX: "Ref912"
--

CREATE INDEX "Ref912" ON "public"."ADMINISTRADORES"(adm_personas_uid_fk)
;
--
-- INDEX: "Ref1213"
--

CREATE INDEX "Ref1213" ON "public"."ADMINISTRADORES"(adm_profesiones_uid_fk)
;
--
-- INDEX: "Ref1110"
--

CREATE INDEX "Ref1110" ON "public"."ESTUDIANTES"(est_colegios_uid_fk)
;
--
-- INDEX: "Ref911"
--

CREATE INDEX "Ref911" ON "public"."ESTUDIANTES"(est_personas_uid_fk)
;
--
-- INDEX: "Ref1414"
--

CREATE INDEX "Ref1414" ON "public"."EVALUACIONES"(eva_tipo_evaluaciones_uid_fk)
;
--
-- INDEX: "Ref815"
--

CREATE INDEX "Ref815" ON "public"."EVALUACIONES"(eva_estudientes_uid_fk)
;
--
-- INDEX: "Ref1023"
--

CREATE INDEX "Ref1023" ON "public"."EVALUACIONES"(eva_administradores_uid_fk)
;
--
-- INDEX: "Ref32"
--

CREATE INDEX "Ref32" ON "public"."PERMISO_RECURSOS"(prr_permisos_uid_fk)
;
--
-- INDEX: "Ref43"
--

CREATE INDEX "Ref43" ON "public"."PERMISO_RECURSOS"(prr_recursos_uid_fk)
;
--
-- INDEX: "Ref24"
--

CREATE INDEX "Ref24" ON "public"."ROL_PERMISOS"(rlp_roles_uid_fk)
;
--
-- INDEX: "Ref35"
--

CREATE INDEX "Ref35" ON "public"."ROL_PERMISOS"(rlp_permisos_uid_fk)
;
--
-- INDEX: "Ref124"
--

CREATE INDEX "Ref124" ON "public"."TH_LOGIN"("thl_users_uid-fk")
;
--
-- INDEX: "Ref26"
--

CREATE INDEX "Ref26" ON "public"."USUARIO_ROLES"(urr_roles_uid_fk)
;
--
-- INDEX: "Ref19"
--

CREATE INDEX "Ref19" ON "public"."USUARIO_ROLES"(urr_usuarios_uid_fk)
;
--
-- INDEX: "Ref922"
--

CREATE INDEX "Ref922" ON "public"."USUARIOS"(usr_personas_uid_fk)
;
--
-- TABLE: "public"."ADMINISTRADORES"
--

ALTER TABLE "public"."ADMINISTRADORES" ADD CONSTRAINT "RefPERSONAS12"
    FOREIGN KEY (adm_personas_uid_fk)
        REFERENCES "public"."PERSONAS"(per_uid_pk)
;

ALTER TABLE "public"."ADMINISTRADORES" ADD CONSTRAINT "RefPROFESIONES13"
    FOREIGN KEY (adm_profesiones_uid_fk)
        REFERENCES "public"."PROFESIONES"(prf_uid_pk)
;


--
-- TABLE: "public"."ESTUDIANTES"
--

ALTER TABLE "public"."ESTUDIANTES" ADD CONSTRAINT "RefCOLEGIOS10"
    FOREIGN KEY (est_colegios_uid_fk)
        REFERENCES "public"."COLEGIOS"(col_uid_pk)
;

ALTER TABLE "public"."ESTUDIANTES" ADD CONSTRAINT "RefPERSONAS11"
    FOREIGN KEY (est_personas_uid_fk)
        REFERENCES "public"."PERSONAS"(per_uid_pk)
;


--
-- TABLE: "public"."EVALUACIONES"
--

ALTER TABLE "public"."EVALUACIONES" ADD CONSTRAINT "RefTIPO_EVALUACIONES14"
    FOREIGN KEY (eva_tipo_evaluaciones_uid_fk)
        REFERENCES "public"."TIPO_EVALUACIONES"(tev_uid_pk)
;

ALTER TABLE "public"."EVALUACIONES" ADD CONSTRAINT "RefESTUDIANTES15"
    FOREIGN KEY (eva_estudientes_uid_fk)
        REFERENCES "public"."ESTUDIANTES"(est_uid_pk)
;

ALTER TABLE "public"."EVALUACIONES" ADD CONSTRAINT "RefADMINISTRADORES23"
    FOREIGN KEY (eva_administradores_uid_fk)
        REFERENCES "public"."ADMINISTRADORES"(adm_uid_pk)
;


--
-- TABLE: "public"."PERMISO_RECURSOS"
--

ALTER TABLE "public"."PERMISO_RECURSOS" ADD CONSTRAINT "RefPERMISOS2"
    FOREIGN KEY (prr_permisos_uid_fk)
        REFERENCES "public"."PERMISOS"(per_uid_pk)
;

ALTER TABLE "public"."PERMISO_RECURSOS" ADD CONSTRAINT "RefRECURSOS3"
    FOREIGN KEY (prr_recursos_uid_fk)
        REFERENCES "public"."RECURSOS"(rec_uid_pk)
;


--
-- TABLE: "public"."ROL_PERMISOS"
--

ALTER TABLE "public"."ROL_PERMISOS" ADD CONSTRAINT "RefROLES4"
    FOREIGN KEY (rlp_roles_uid_fk)
        REFERENCES "public"."ROLES"(rol_uid_pk)
;

ALTER TABLE "public"."ROL_PERMISOS" ADD CONSTRAINT "RefPERMISOS5"
    FOREIGN KEY (rlp_permisos_uid_fk)
        REFERENCES "public"."PERMISOS"(per_uid_pk)
;


--
-- TABLE: "public"."TH_LOGIN"
--

ALTER TABLE "public"."TH_LOGIN" ADD CONSTRAINT "RefUSUARIOS24"
    FOREIGN KEY ("thl_users_uid-fk")
        REFERENCES "public"."USUARIOS"(usr_uid_pk)
;


--
-- TABLE: "public"."USUARIO_ROLES"
--

ALTER TABLE "public"."USUARIO_ROLES" ADD CONSTRAINT "RefROLES6"
    FOREIGN KEY (urr_roles_uid_fk)
        REFERENCES "public"."ROLES"(rol_uid_pk)
;

ALTER TABLE "public"."USUARIO_ROLES" ADD CONSTRAINT "RefUSUARIOS9"
    FOREIGN KEY (urr_usuarios_uid_fk)
        REFERENCES "public"."USUARIOS"(usr_uid_pk)
;


--
-- TABLE: "public"."USUARIOS"
--

ALTER TABLE "public"."USUARIOS" ADD CONSTRAINT "RefPERSONAS22"
    FOREIGN KEY (usr_personas_uid_fk)
        REFERENCES "public"."PERSONAS"(per_uid_pk)
;
