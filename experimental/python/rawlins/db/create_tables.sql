CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();

create table if not exists users
(
  id                uuid default uuid_generate_v4(),
  email             varchar(400) not null unique,
  password          varchar(120),
  registration_time timestamp    not null,
  primary key (id)
);

create table if not exists room_groups
(
  id               uuid default uuid_generate_v4(),
  name             varchar(40) not null unique,
  minimum_capacity int         not null,
  maximum_capacity int         not null,
  note             text,
  primary key (id)
);

create table if not exists rooms
(
  id               uuid default uuid_generate_v4(),
  name             varchar(40) not null unique,
  minimum_capacity int         not null,
  maximum_capacity int         not null,
  note             text,
  room_group       uuid references room_groups,
  primary key (id)
);

create table if not exists reservations
(
  id         uuid default uuid_generate_v4(),
  start_time timestamp not null,
  end_time   timestamp not null,
  room_id    uuid references rooms,
  user_id    uuid references users,
  primary key (id)
);
