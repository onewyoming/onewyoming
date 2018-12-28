select id, email, password, registration_time, is_administrator, is_reporter, is_banned
from users;
select id,user_id, token
from user_tokens;
select id, name, minimum_capacity, maximum_capacity, note
from room_groups;
select id, name, minimum_capacity, maximum_capacity, note, room_group
from rooms;
select id, start_time, end_time, room_id, user_id
from reservations;
show timezone;