ALTER DATABASE rawlins SET timezone TO 'UTC';

insert into users (email, password, registration_time, is_administrator, is_reporter, is_banned)
values ('hikingfan@gmail.com',
        'pbkdf2:sha256:50000$SDkLJtq2$21296d9762a82c5ee6a49575d3a8bd66788468b788dcddd66dc38efe7dbdf636',
        current_timestamp, true, true, false);

insert into room_groups (name, minimum_capacity, maximum_capacity, note)
values ('Sania Mirza Conference Suites',
        4,
        48,
        'Sania Mirza conference rooms are usually for small groups but we can accommodate up to four dozen people');

insert into rooms (name, minimum_capacity, maximum_capacity, note, room_group)
select 'Narendra Modi Executive Conference Suite',
       12,
       48,
       'Narendra Modi Executive Conference Suite is the crown jewel meeting room available in our make believe universe',
       room_groups.id
from room_groups
where name = 'Sania Mirza Conference Suites'
limit 1;

insert into reservations (start_time, end_time, room_id, user_id)
select '2020-12-26 19:30:00.000000+00',
       '2020-12-26 21:30:00.000000+00',
       rooms.id,
       users.id
from rooms,
     users
where rooms.name = 'Narendra Modi Executive Conference Suite'
  and users.email = 'hikingfan@gmail.com'
limit 1;