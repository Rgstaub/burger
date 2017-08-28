DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
	id INT(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(128) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP,
    PRIMARY KEY(id)
)
    