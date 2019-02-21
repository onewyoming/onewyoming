create table if not exists applicants
(
  id                serial,
  email             varchar     not null unique,
  registration_time timestamptz not null unique,
  primary key (id)
);

create table if not exists visitors
(
  id         serial,
  ip_address varchar,
  user_agent varchar,
  referrer   varchar,
  full_path  varchar,
  visit_time timestamptz,
  primary key (id)
);

create table if not exists referrals
(
referrer int references applicants,
referee int unique references applicants,
referral_time timestamptz,
primary key(referer, referee)
);
