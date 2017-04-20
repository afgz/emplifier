insert into location (id, city) values ('1', 'Jakarta');
insert into location (id, city) values ('2', 'Bandung');
insert into location (id, city) values ('3', 'Yogyakarta');
insert into location (id, city) values ('4', 'Bali');

insert into employee (id, first_name, last_name, gender, dob, nationality, marital_status, phone, email, hired_date, suspend_date, division, grade, sub_division, status, image_url, location_id)
 values (
    '1',
    'Muhammad Ramziadh',
    'Afgeshza',
    'male',
    '1994-05-21',
    'Indonesia',
    'Single',
    '087878000765',
    'afgeshza@gmail.com',
    '2017-03-13',
    null,
    'SWD Red',
    'SE-AN',
    'Java Bootcamp',
    'Permanent',
    '1.jpg',
    '1'
);