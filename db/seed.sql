delete from builds where 1=1;
delete from customers where 1=1;
delete from build_parts_xref where 1=1;
delete from categories where 1=1;
delete from build_types where 1=1;
delete from parts where 1=1;
delete from prefabs where 1=1;

/*
*   SEED DATA
*/
insert into customers (id, name, email) values 
    (1138, "mike", "michael.n.preston@gmail.com");

/* Builds */
insert into builds (id, customerId, category, name) values 
    (12345, 1138, "Gaming", "super-special-awesum build");
    
insert into builds (customerId, category, name) values 
	(27, "Gaming", "Midnight Flare"),
	(1, "Gaming", "Solar Surfer"),
	(2, "Gaming", "Nightmare Moon"),
	(3, "Gaming", "El Chimichanga"),
	(42, "Gaming", "'IT'");

/* Parts */
-- insert into parts (name, cost) values 
--     ("Intel Core i3-8100", 118.99),
--     ("Gigabyte B360M DSH3H", 74.99),
--     ("MSI Radeon RX 580 GB Armor", 209.99),
--     ("Intel Core i5-8600", 238.89),
--     ("Deepcool CAPTAIN 120EX WHITE 76.52", 68.94),
--     ("MSI - B360 GAMING ARCTIC ATX LGA1151 Motherboard", 129.99),
--     ("Corsair - Vengeance RGB Pro 16 GB (2 x 8 GB) DDR4-2666 Memory ", 129.99),
--     ("Samsung - 860 Evo 1 TB 2.5\" Solid State Drive", 157.99),  # TODO: escape quotes within string
--     ("Gigabyte - GeForce GTX 1070 Ti 8 GB Video Card", 439.99),
--     ("EVGA - DG-76 Alpine White ATX Mid Tower Case", 119.89),
--     ("Corsair - RMx (2018) 750 W 80+ Gold Certified Fully-Modular ATX Power Supply", 109.99);

/* Prefabs */
insert into prefabs (name, permalink) values 
    ("Leche Naranja", "https://pcpartpicker.com/b/Qf4qqs"),
    ("My First PC", "https://pcpartpicker.com/b/jxmqqs"),
    ("", "https://pcpartpicker.com/list/xtnFMZ"),
    ("", "https://pcpartpicker.com/list/PB32GG"),
    ("", "https://pcpartpicker.com/list/x27BHh"),
    ("", "https://pcpartpicker.com/list/T6Fq29"),
    ("", "https://pcpartpicker.com/list/pYBWTB"),
    ("", "https://pcpartpicker.com/list/d8CB4q"),
    ("", "https://pcpartpicker.com/list/XhwKV6"),
    ("", "https://pcpartpicker.com/list/MCWwfH"),
    ("", "https://pcpartpicker.com/list/Hbzjkd"),
    ("", "https://pcpartpicker.com/list/4dcwq4");
    
/* Simulated build */
insert into build_parts_xref(partId, buildId) values 
    (3, 12345),
    (4, 12345),
    (6, 12345),
    (10, 12345);

/* Categories */
insert into categories (name) values 
    ('CPU'),
    ('CPU Cooler'),
    ('Memory'),
    ('Motherboard'),
    ('Storage'),
    ('Case'),
    ('Keyboard'),
    ('Mouse'),
    ('Power Supply'),
    ('Optical Drive'),
    ('Software'),
    ('Video Card'),
    ('Operating System'),
    ('Monitor'),
    ('External Storage'),
    ('Peripherals'),
    ('Accessories'),
    ('Custom');

/* build types */
insert into build_types (name) values 
    ('Laptop'),
    ('Gaming'),
    ('Mac'),
    ('Linux'),
    ('Custom');