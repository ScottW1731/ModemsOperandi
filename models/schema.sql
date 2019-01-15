use build_test;

drop table if exists builds;
drop table if exists parts;
drop table if exists customers;

create table builds
(
	id int not null AUTO_INCREMENT,
	customerId int not null,
	name varchar(150),
	primary key (id)
#	foreign key (customerId)
);

create table parts
(
	id int not null AUTO_INCREMENT,
	name varchar(150),
	cost double(12, 2),
	buildId int,
	primary key (id)
);

create table customers(
	id int not null auto_increment,
	name varchar(150),
	primary key (id)
);

## Seed Data                
insert into customers (id, name) values (1138, "mike");
insert into builds (id, customerId, name) values (12345, 1138, "super-special-awesum build");
insert into parts (buildId, name, cost) values (12345, "Intel Core i3-8100", 118.99);
insert into parts (buildId, name, cost) values (12345, "Gigabyte B360M DSH3H", 74.99);
insert into parts (buildId, name, cost) values (12345, "MSI Radeon RX 580 GB Armor", 209.99);

## Full build report
select c.name as customerName, b.id as buildId, b.name, sum(cost) as total, customerId 
	from parts p 
	join builds b
	join customers c
	on p.buildId = b.id && c.id = b.customerId;


## Builds and Parts
select * from parts;
select * from builds;
select * from customers;

## Sample Parts List:
# Intel Core i3-8100; Gigabyte B360M DSH3H; MSI Radeon RX 580 GB Armor; Crucial 2x4GB Ballistix Sport DDR4-2400; Crucial MX500 500GB M.2; Thermaltake Versa H18 Tempered Glass; 
# EVGA 450 BT; Microsoft Windows 10 Flash Drive; Corsair Harpoon RGB Gaming Mouse; Seagate Barracuda 2TB; Acer XFA240;  Microsoft Wired Keyboard 600 "