CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();

ALTER DATABASE rawlins SET timezone TO 'UTC';

create table if not exists users
(
  id                uuid default uuid_generate_v4(),
  email             varchar     not null unique,
  password          varchar,
  registration_time timestamptz not null,
  is_administrator  boolean     not null,
  is_reporter       boolean     not null,
  is_banned         boolean     not null,
  primary key (id)
);

create table if not exists room_groups
(
  id               uuid default uuid_generate_v4(),
  name             varchar not null unique,
  minimum_capacity int     not null,
  maximum_capacity int     not null,
  note             text,
  primary key (id)
);

create table if not exists rooms
(
  id               uuid default uuid_generate_v4(),
  name             varchar not null unique,
  minimum_capacity int     not null,
  maximum_capacity int     not null,
  note             text,
  room_group       uuid references room_groups,
  primary key (id)
);

create table if not exists reservations
(
  id         uuid default uuid_generate_v4(),
  start_time timestamptz not null,
  end_time   timestamptz not null,
  room_id    uuid references rooms,
  user_id    uuid references users,
  primary key (id)
);
