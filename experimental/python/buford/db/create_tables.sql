create table if not exists applicant (
id serial,
email varchar not null unique,
registration_time timestamptz not null unique,
primary key(id)
);