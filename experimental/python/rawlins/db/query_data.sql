select id, email, password, registration_time
from users;
select id, name, minimum_capacity, maximum_capacity, note
from room_groups;
select id, name, minimum_capacity, maximum_capacity, note, room_group
from rooms;
select id, start_time, end_time, room_id, user_id
from reservations;
show timezone;