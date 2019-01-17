drop table if exists builds;
drop table if exists parts;
drop table if exists customers;
drop table if exists build_parts_xref;

create table builds
(
	id int not null AUTO_INCREMENT,
	customerId int not null,
	name varchar(150),
    buildType varchar(150),
	primary key (id)
);

create table parts
(
	id int not null AUTO_INCREMENT,
	name varchar(150),
	cost double(12, 2),	
	primary key (id)
);

create table customers(
	id int not null auto_increment,
	name varchar(150),
	primary key (id)
);

create table build_parts_xref(
    partId int not null,
    buildId int not null
)