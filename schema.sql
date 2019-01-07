CREATE DATABASE build;
USE build;

CREATE TABLE `build` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,

  `part` VARCHAR( 255) NOT NULL,
  `price` INTEGER NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 
);
