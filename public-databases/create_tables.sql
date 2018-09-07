create schema wyoming;

CREATE TABLE wyoming.person(
id SERIAL PRIMARY KEY,
email VARCHAR(400),
password VARCHAR(120) NOT NULL,
registration_time TIMESTAMP
);