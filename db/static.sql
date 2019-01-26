#USE pc_builder;

drop table if EXISTS staticbuilds;

create table staticbuilds
(
    ID int NOT NULL AUTO_INCREMENT,
    name varchar(150) not null,
    cpu varchar(150),
    cpuprice DECIMAL(6,2),
    cooler varchar(150),
    coolerprice DECIMAL(6,2),
    motherboard varchar(150),
    motherboardprice DECIMAL(6,2),
    memory varchar(150),
    memoryprice DECIMAL(6,2),
    storage varchar(150),
    storageprice DECIMAL(6,2),
    gpu varchar(150),
    gpuprice DECIMAL(6,2),
    cse varchar(150),
    cseprice DECIMAL(6,2),
    powersupply varchar(150),
    powersupplyprice DECIMAL(6,2),
    price DECIMAL(6,2),
    PRIMARY KEY (ID)
);



INSERT INTO staticbuilds
    (name, cpu, cpuprice, cooler, coolerprice, motherboard, motherboardprice, memory, memoryprice, storage, storageprice, gpu, gpuprice, cse, cseprice, powersupply, powersupplyprice, price)
VALUES
    ('1300 Build', 'Intel - Core i5-8600K 3.6 GHz 6-Core Processor', 259.79, 'CRYORIG - H5 Ultimate 76 CFM CPU Cooler', 75.84, 'MSI - Z370-A PRO ATX LGA1151 Motherboard', 124.39, 'G.Skill - Trident Z 16 GB (2 x 8 GB) DDR4-3200 Memory', 129.99, 'ADATA - Ultimate SU650 480 GB 2.5" Solid State Drive', 64.89, 'EVGA - GeForce RTX 2070 8 GB Black Video Card', 499.99, 'NZXT - H500 (Black) ATX Mid Tower Case', 69.99, 'EVGA - SuperNOVA G2 650 W 80+ Gold Certified Fully-Modular ATX Power Supply', 79.99, 1304.87);

INSERT INTO staticbuilds
    (name, cpu, cpuprice, cooler, coolerprice, motherboard, motherboardprice, memory, memoryprice, storage, storageprice, gpu, gpuprice, cse, cseprice, powersupply, powersupplyprice, price)
VALUES
    ('1500 Build', 'Intel - Core i7-8700K 3.7 GHz 6-Core Processor', 369.99, 'EVGA - CLC 240 74.82 CFM Liquid CPU Cooler', 90.81, 'MSI - Z370-A PRO ATX LGA1151 Motherboard', 109.39, 'G.Skill - Trident Z 16 GB (2 x 8 GB) DDR4-3200 Memory', 129.99, 'ADATA - Ultimate SU650 480 GB 2.5" Solid State Drive', 64.89, 'EVGA - GeForce RTX 2070 8 GB Black Video Card', 499.99, 'NZXT - H500 (Black) ATX Mid Tower Case', 69.99, 'EVGA - SuperNOVA G2 650 W 80+ Gold Certified Fully-Modular ATX Power Supply', 79.99, 1480.03);

INSERT INTO staticbuilds
    (name, cpu, cpuprice, cooler, coolerprice, motherboard, motherboardprice, memory, memoryprice, storage, storageprice, gpu, gpuprice, cse, cseprice, powersupply, powersupplyprice, price)
VALUES
    ('1700 Build', 'Intel - Core i7-8700K 3.7 GHz 6-Core Processor', 369.99, 'be quiet! - Dark Rock 4 CPU Cooler', 68.99, 'Asus - ROG STRIX Z390-E GAMING ATX LGA1151 Motherboard', 235.99, 'G.Skill - Trident Z RGB 16 GB (2 x 8 GB) DDR4-3200 Memory', 139.99, 'Samsung - 860 Evo 500 GB 2.5" Solid State Drive', 84.99, 'MSI - GeForce RTX 2070 8 GB Video Card', 489.99, 'be quiet! - Dark Base 700 ATX Mid Tower Case', 169.99, 'EVGA - SuperNOVA G3 750 W 80+ Gold Certified Fully-Modular ATX Power Supply', 99.89, 1719.71);

INSERT INTO staticbuilds
    (name, cpu, cpuprice, cooler, coolerprice, motherboard, motherboardprice, memory, memoryprice, storage, storageprice, gpu, gpuprice, cse, cseprice, powersupply, powersupplyprice, price)
VALUES
    ('2500 Build', 'Intel - Core i7-8700K 3.7 GHz 6-Core Processor', 369.99, 'EVGA - CLC 240 74.82 CFM Liquid CPU Cooler', 90.81, 'Asus - ROG STRIX Z370-E GAMING ATX LGA1151 Motherboard', 380.47, 'G.Skill - Ripjaws V Series 16 GB (2 x 8 GB) DDR4-3200 Memory', 179.99, 'Samsung - 860 Evo 500 GB 2.5" Solid State Drive', 84.99, 'Zotac - GeForce GTX 1080 Ti 11 GB AMP Extreme Video Card', 1410.00, 'Fractal Design - Define R6 Black TG ATX Mid Tower Case', 149.99, 'SeaSonic - FOCUS Plus Gold 750 W 80+ Gold Certified Fully-Modular ATX Power Supply', 84.49, 2766.12);

insert into staticbuilds (name, cpu, cpuprice, cooler, coolerprice, motherboard, motherboardprice, memory, memoryprice, storage, storageprice, gpu, gpuprice, cse, cseprice, powersupply, powersupplyprice, price)
    VALUES ('500 build', 'AMD - Ryzen 5 2600 3.4 GHz 6-Core Processor', '164.99', null, null, 'ASRock - AB350M-HDV Micro ATX AM4 Motherboard', '56.49', 'GeIL - EVO SPEAR 8 GB (2 x 4 GB) DDR4-2400 Memory', '46.99', '	
	Toshiba - Product Series:DT01ACA 500 GB 3.5" 7200RPM Internal Hard Drive', '22.95', 'Gigabyte - Radeon RX 570 4 GB AORUS 4G Video Card', '139.99', 'Rosewill - FBM-05 MicroATX Mini Tower Case', '19.99', 'Corsair - CX (2017) 450 W 80+ Bronze Certified ATX Power Supply', '19.99', '472.28'),
    
	('550 build', 'AMD - Ryzen 3 2200G 3.5 GHz Quad-Core Processor', '94.89', null, null, 'ASRock - B450M-HDV Micro ATX AM4 Motherboard', '89.89', 'Team - Vulcan 8 GB (2 x 4 GB) DDR4-3000 Memory', '60.88', 'Samsung - 860 Evo 500 GB 2.5" Solid State Drive', '84.99', 'MSI - Radeon RX 570 8 GB ARMOR OC Video Card', '154.99', 'Corsair - Carbide Series 88R MicroATX Mid Tower Case', '39.99', 'Corsair - CXM (2015) 450 W 80+ Bronze Certified Semi-Modular ATX Power Supply', '49.89', '575.52'),
    
    ('600 build', 
    'AMD - Ryzen 5 2600 3.4 GHz 6-Core Processor', '164.99', 
    null, null, 
    'Gigabyte - B450M DS3H Micro ATX AM4 Motherboard', '72.99', 
    'G.Skill - Aegis 16 GB (2 x 8 GB) DDR4-3000 Memory', '92.99', 
    'Team - L5 LITE 3D 240 GB 2.5" Solid State Drive Western Digital - Caviar Blue 1 TB 3.5" 7200RPM Internal Hard Drive', '29.99', 
    'Sapphire - Radeon RX 570 4 GB NITRO+ Video Card', '149.99', 
    'Cougar - MX340 ATX Mid Tower Case', '44.99', 
    'EVGA - BT 450 W 80+ Bronze Certified ATX Power Supply', '29.89', 
    '636.11'),
    
    ('800 build', 
    'AMD - Ryzen 5 1600 3.2 GHz 6-Core Processor', '158.89', 
    null, null, 
    'Asus - STRIX B350-F GAMING ATX AM4 Motherboard', '115.52', 
    'Corsair - Vengeance LPX 16 GB (2 x 8 GB) DDR4-3000 Memory', '104.99', 
    'Seagate - Barracuda 2 TB 3.5" 7200RPM Internal Hard Drive', '59.89', 
    'MSI - Radeon RX 580 8 GB ARMOR OC Video Card', '255.99', 
    'Cooler Master - HAF 912 USB3.0 ATX Mid Tower Case', '120.53', 
    'SeaSonic - FOCUS Plus Gold 650 W 80+ Gold Certified Fully-Modular ATX Power Supply', '89.99', 
    '958.69'),
    
    ('900 build', 
    'AMD - Ryzen 5 2600 3.4 GHz 6-Core Processor', '164.99', 
    null, null, 
    'MSI - X470 GAMING PLUS ATX AM4 Motherboard', '129.50', 
    'Team - Vulcan 16 GB (2 x 8 GB) DDR4-3000 Memory', '89.99', 
    'Intel - 545s 256 GB 2.5" Solid State Drive Hitachi - 1 TB 3.5" 7200RPM Internal Hard Drive', '92.79', 
    'Gigabyte - GeForce GTX 1070 8 GB Windforce OC Video Card', '299.89', 
    'be quiet! - Pure Base 600 w/Window (Black/Orange) ATX Mid Tower Case', '97.00', 
    'NZXT - HALE82 V2 550 W 80+ Bronze Certified Fully-Modular ATX Power Supply', '39.99', 
    '914.15'),
    
     ('1000 build', 
    'AMD - Ryzen 7 2700 3.2 GHz 8-Core Processor', '259.89', 
    null, null, 
    'MSI - B450-A PRO ATX AM4 Motherboard', '96.20', 
    'G.Skill - Aegis 16 GB (2 x 8 GB) DDR4-3000 Memory', '92.99', 
    'Kingston - A400 240 GB 2.5" Solid State Drive" Seagate - Constellation ES 3 TB 3.5" 7200RPM Internal Hard Drive', '29.99', 
    'Gigabyte - GeForce GTX 1070 Ti 8 GB WINDFORCE Video Card', '479.99', 
    'Corsair - SPEC-01 RED ATX Mid Tower Case', '52.34', 
    'Corsair - CXM 550 W 80+ Bronze Certified Semi-Modular ATX Power Supply', '39.99', 
    '1051.39');