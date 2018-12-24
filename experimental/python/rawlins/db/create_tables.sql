-- drop database if exists rawlins;
-- drop role if exists rawlins;
-- create user rawlins createdb password 'rawlins';
-- create database rawlins owner rawlins;
-- \connect rawlins;
-- drop schema if exists rawlins;
-- create schema rawlins;
-- drop table if exists rawlins.users;
CREATE TABLE users(
id SERIAL PRIMARY KEY,
email VARCHAR(400),
password VARCHAR(120) NOT NULL,
registration_time TIMESTAMP
);
