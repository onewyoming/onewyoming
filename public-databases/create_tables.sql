create schema wyoming;

CREATE TABLE wyoming.person(
id SERIAL PRIMARY KEY,
profile_picture BYTEA,
email VARCHAR(400),
password VARCHAR(60) NOT NULL,
password_salt VARCHAR(300),
password_hash_algorithm VARCHAR(300),
registration_time TIMESTAMP,
email_confirmation_token VARCHAR(100),
password_reminder_token VARCHAR(100),
password_reminder_expiration TIMESTAMP,
status INTEGER 
);