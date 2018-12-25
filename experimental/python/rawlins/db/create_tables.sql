CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
SELECT uuid_generate_v4();

create table users (
id uuid DEFAULT uuid_generate_v4 (),
email varchar(400) not null unique,
password varchar(120),
registration_time timestamp,
PRIMARY KEY (id)
);
