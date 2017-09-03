DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INT(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(128) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,

    pickles BOOLEAN DEFAULT false,
    ketchup BOOLEAN DEFAULT false,
    patty VARCHAR(128) DEFAULT "Beef",
    mustard BOOLEAN DEFAULT false,
    onions BOOLEAN DEFAULT false,
    cheese BOOLEAN DEFAULT false,
    bacon BOOLEAN DEFAULT false,
    lettuce BOOLEAN DEFAULT false,




    PRIMARY KEY(id)
)
    