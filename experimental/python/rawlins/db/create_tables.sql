CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();

create table if not exists users
(
  id                uuid default uuid_generate_v4(),
  email             varchar(400) not null unique,
  password          varchar(120),
  registration_time timestamp,
  primary key (id)
);

create table if not exists roomgroup
(
  id               uuid default uuid_generate_v4(),
  name             varchar(40) not null unique,
  minimum_capacity int         not null,
  maximum_capacity int         not null,
  note             text,
  primary key (id)
)