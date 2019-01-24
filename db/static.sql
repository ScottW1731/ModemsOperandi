USE pc_builder;

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
