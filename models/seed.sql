use pc_builder;

## Seed Data                
insert into customers (id, name) values (1138, "mike");
insert into builds (id, customerId, name) values (12345, 1138, "super-special-awesum build");
insert into parts (buildId, name, cost) values (12345, "Intel Core i3-8100", 118.99);
insert into parts (buildId, name, cost) values (12345, "Gigabyte B360M DSH3H", 74.99);
insert into parts (buildId, name, cost) values (12345, "MSI Radeon RX 580 GB Armor", 209.99);
