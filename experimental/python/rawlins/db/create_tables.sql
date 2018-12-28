CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();

ALTER DATABASE rawlins SET timezone TO 'UTC';

Create or replace function random_string(length integer) returns text as
$$
declare
  chars  text[]  := '{0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}';
  result text    := '';
  i      integer := 0;
begin
  if length < 0 then
    raise exception 'Given length cannot be less than 0';
  end if;
  for i in 1..length
    loop
      result := result || chars [ 1 + random() * (array_length(chars, 1) - 1)];
    end loop;
  return result;
end;
$$ language plpgsql;

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

create table if not exists user_tokens
(
  id      uuid default uuid_generate_v4(),
  user_id uuid references users            not null,
  token   text default random_string(4096) not null,
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
