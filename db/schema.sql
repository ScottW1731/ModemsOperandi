drop table if exists builds;
drop table if exists build_types;
drop table if exists parts;
drop table if exists customers;
drop table if exists build_parts_xref;
drop table if exists categories;

create table builds
(
	id int not null AUTO_INCREMENT,
	customerId int default null,
	name varchar(150) not null,
    category varchar(150), 
	primary key (id)
);

create table parts
(
	id int not null AUTO_INCREMENT,
	name varchar(150),
	cost double(12, 2),	
    categoryId varchar(150),
    img_url varchar(250) null,
	primary key (id)
);

#permalinks
create table prefabs
(
    id int not null AUTO_INCREMENT,
    name varchar(150),
    permalink varchar(350),
    primary key (id)
);

/* parts <-===-> a customer's build */
create table build_parts_xref(
    partId int not null,
    buildId int not null
);

create table categories(
    id int not null auto_increment,
    name varchar(150),
    primary key(id)
);

create table build_types(    
    id int not null auto_increment,
    name varchar(150),
    primary key(id)
);

create table customers(
	id int not null auto_increment,
	name varchar(150),
    email varchar(150),
	primary key (id)
);
