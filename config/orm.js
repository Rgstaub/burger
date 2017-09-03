"use strict"

// Connect to the database
const db = require("./connections.js");

//============== ORM =========================

let orm = {
  // return all of the burgers
  selectAll: (cb) => {
    let selectStr = "SELECT * FROM burgers"
    db.query(selectStr, (err, res) => {
      if (err) throw err;
      cb(res);
    })
  },
  // Add a new burger to the database and return the id
  insertOne: (name) => {
    let insertStr = "INSERT INTO burgers (burger_name) VALUES (?);"
    db.query(insertStr, name, (err, res) => {
      if (err) throw err;
    })
  },
  // Change a burger from uneaten to eaten
  updateOne: (id) => {
    let updateStr = "UPDATE burgers SET devoured=true WHERE id=?";
    db.query(updateStr, id, (err, res) => {
      if (err) throw err;
    })
  },
  // Reverts the database to its default data set
  refreshAll: () => {
    let refreshStr = `
      DROP DATABASE IF EXISTS burger_db;

      CREATE DATABASE burger_db;

      USE burger_db;

      CREATE TABLE burgers (
        id INT(10) NOT NULL AUTO_INCREMENT,
          burger_name VARCHAR(128) NOT NULL,
          devoured BOOLEAN DEFAULT false,
          date TIMESTAMP,
          PRIMARY KEY(id)
      );

      INSERT INTO burgers (burger_name) VALUES
        ('Classic Cheesburger'),
        ('Bacon Cheesburger'),
        ('BBQ Burger'),
        ('Bacon Avacado Burger'),
        ('Mushroom Swiss Burger'),
        ('Hawaiian Burger'),
        ('Spinach and Goat Cheese')
      ;
    `
    db.query(refreshStr, (err, res) => {
      if (err) throw err;
    })
  },
  // Deletes all devoured burgers
  clearDevoured: () => {
    let deleteStr = "DELETE FROM burgers WHERE devoured=true;"
    db.query(deleteStr, (err, res) => {
      if (err) throw err;
    })
  }
}



// Ship it
module.exports = orm;