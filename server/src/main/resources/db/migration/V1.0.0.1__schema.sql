drop table if exists location, employees;

create table location (
	id varchar(255) not null,
	city varchar(255) not null,
	primary key (id)
);

create table employee (
    id varchar(255) not null,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    gender varchar(6) not null,
    dob date not null,
    nationality varchar(45) not null,
    marital_status varchar(7) not null,
    phone varchar(15) not null unique,
    email varchar(50) not null unique,
    hired_date date not null,
    suspend_date date,
    division varchar(45) not null,
    grade varchar(45) not null,
    sub_division varchar(45) not null,
    status varchar(20) not null,
    image_url varchar(255),
    location_id varchar(255) not null,
    primary key (id),
    foreign key (location_id) references location(id)
);