/*
*   SEED DATA
*/
insert into customers (id, name, email) values (1138, "mike", "michael.n.preston@gmail.com");

/* Builds */
insert into builds (id, customerId, category, name) values (12345, 1138, "Gaming", "super-special-awesum build");
insert into builds (customerId, category, name) values (0042, "Gaming", "dbz");

/* Parts */
insert into parts (name, cost) values ("Intel Core i3-8100", 118.99);
insert into parts (name, cost) values ("Gigabyte B360M DSH3H", 74.99);
insert into parts (name, cost) values ("MSI Radeon RX 580 GB Armor", 209.99);
insert into parts (name, cost) values ("Intel Core i5-8600", 238.89);
insert into parts (name, cost) values ("Deepcool CAPTAIN 120EX WHITE 76.52", 68.94);
insert into parts (name, cost) values ("MSI - B360 GAMING ARCTIC ATX LGA1151 Motherboard", 129.99);
insert into parts (name, cost) values ("Corsair - Vengeance RGB Pro 16 GB (2 x 8 GB) DDR4-2666 Memory ", 129.99);
insert into parts (name, cost) values ("Samsung - 860 Evo 1 TB 2.5\" Solid State Drive", 157.99);  # TODO: escape quotes within string
insert into parts (name, cost) values ("Gigabyte - GeForce GTX 1070 Ti 8 GB Video Card", 439.99);
insert into parts (name, cost) values ("EVGA - DG-76 Alpine White ATX Mid Tower Case", 119.89);
insert into parts (name, cost) values ("Corsair - RMx (2018) 750 W 80+ Gold Certified Fully-Modular ATX Power Supply", 109.99);

/* Simulated build */
insert into build_parts_xref(partId, buildId) values (3, 12345);
insert into build_parts_xref(partId, buildId) values (4, 12345);
insert into build_parts_xref(partId, buildId) values (6, 12345);
insert into build_parts_xref(partId, buildId) values (10, 12345);

/* Categories */
insert into categories (name) values ('CPU');
insert into categories (name) values ('CPU Cooler');
insert into categories (name) values ('Memory');
insert into categories (name) values ('Motherboard');
insert into categories (name) values ('Storage');
insert into categories (name) values ('Case');
insert into categories (name) values ('Keyboard');
insert into categories (name) values ('Mouse');
insert into categories (name) values ('Power Supply');
insert into categories (name) values ('Optical Drive');
insert into categories (name) values ('Software');
insert into categories (name) values ('Video Card');
insert into categories (name) values ('Operating System');
insert into categories (name) values ('Monitor');
insert into categories (name) values ('External Storage');
insert into categories (name) values ('Peripherals');
insert into categories (name) values ('Accessories');
insert into categories (name) values ('Custom');

/* build types */
insert into build_types (name) values ('Laptop');
insert into build_types (name) values ('Gaming');
insert into build_types (name) values ('Mac');
insert into build_types (name) values ('Linux');
insert into build_types (name) values ('Custom');

# For our web-crawler & parser
insert into prefabs (name, permalink) values ("Leche Naranja", "https://pcpartpicker.com/b/Qf4qqs");