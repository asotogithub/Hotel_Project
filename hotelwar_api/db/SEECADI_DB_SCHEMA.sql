USER postgres

--
-- ER/Studio Data Architect SQL Code Generation
-- Project :      Modelo_01.DM1
--
-- Date Created : Thursday, October 10, 2024 21:51:10
-- Target DBMS : PostgreSQL 9.x
--

-- Database: DEV

-- DROP DATABASE IF EXISTS "DEV";

CREATE DATABASE "DEV"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

COMMENT ON DATABASE "DEV"
    IS 'test project joaquin';

-- SCHEMA: SEECADI

-- DROP SCHEMA IF EXISTS "SEECADI" ;

CREATE SCHEMA IF NOT EXISTS "SEECADI"
    AUTHORIZATION postgres;