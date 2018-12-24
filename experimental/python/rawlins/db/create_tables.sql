create table users (
id serial primary key,
email varchar(400) not null unique,
password varchar(120),
registration_time timestamp
);