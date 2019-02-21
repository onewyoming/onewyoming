-- insert into applicant (email, registration_time) values ('hikingfan@gmail.com', now());
insert into applicants (email, registration_time)
values ('hikingfan@gmail.com', '2018-12-31 12:06:36.856463+00:00');
insert into applicants (email, registration_time)
values ('bikingfan@gmail.com', '2018-12-31 12:06:36.856463+00:00');
insert into referrals(referrer, referee, referral_time)
values (
    select id from applicants where email like 'hikingfan@gmail.com',
    select id from applicants where email like 'bikingfan@gmail.com',
    '2018-12-31 12:06:36.856463+00:00'
);
