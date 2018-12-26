insert into users (email, password, registration_time)
values ('hikingfan@gmail.com',
        'pbkdf2:sha256:50000$SDkLJtq2$21296d9762a82c5ee6a49575d3a8bd66788468b788dcddd66dc38efe7dbdf636',
        current_timestamp);

insert into room_groups (name, minimum_capacity, maximum_capapcity, note)
values ('Sania Mirza Conference Suites',
        4,
        48,
        'Sania Mirza conference rooms are usually for small groups but we can accommodate up to four dozen people');
