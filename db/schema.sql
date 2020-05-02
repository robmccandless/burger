###
Schema

create database burger_db;
use burger_db;

create table burger
(
    id int not null
    auto_increment,
	burger_name varchar
    (50) not null,
    devour bool not null,
    primary key
    (id)
    );