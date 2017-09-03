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
  updateOne: (id, cb) => {
    let updateStr = "UPDATE burgers SET devoured=true WHERE id=?";
    db.query(updateStr, id, (err, res) => {
      if (err) throw err;
      cb();
    })
  },

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
        ('Bacon BBQ Burger'),
        ('Bacon Avacado Burger'),
        ('Mushroom Swiss Burger'),
        ('Hawaiian Burger'),
        ('Goat Chesse and Pepper Jelly Burger')
      ;
    `
    db.query(refreshStr, (err, res) => {
      if (err) throw err;
    })
  },

  clearDevoured: () => {
    
  }
}



// Ship it
module.exports = orm;