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
    let refreshStr = `DROP DATABASE IF EXISTS burger_db;
      CREATE DATABASE burger_db;
      USE burger_db;
      CREATE TABLE burgers (
        id INT(10) NOT NULL AUTO_INCREMENT,
          burger_name VARCHAR(128) NOT NULL,
          devoured BOOLEAN DEFAULT false,
          date TIMESTAMP,
          bun VARCHAR (128) DEFAULT "Sesame Seed",
        patty VARCHAR(128) DEFAULT "Beef",
          pickles BOOLEAN DEFAULT false,
          ketchup BOOLEAN DEFAULT false,
          mustard BOOLEAN DEFAULT false,
          onions BOOLEAN DEFAULT false,
          cheese BOOLEAN DEFAULT false,
          tomato BOOLEAN DEFAULT false,
          bacon BOOLEAN DEFAULT false,
          lettuce BOOLEAN DEFAULT false,
          special VARCHAR(12),
          PRIMARY KEY(id)
      );
      INSERT INTO burgers (burger_name, bun, patty, pickles, ketchup, mustard, onions, cheese, tomato, bacon, lettuce, special) VALUES
        ('Classic Cheesburger', "Sesame-Seed", "Beef", true, true, true, true, true, true, false, true, null),
        ('Bacon Cheesburger', "Brioche", "Beef", true, true, true, true, true, true, true, true, null),
        ('Turkey Burger', "Whole Wheat", "Turkey", true, false, true, true, false, true, false, true, null),
        ('Bacon Avacado Burger', "Whole Wheat", "Beef", false, false, true, true, false, true, true, false, "Avacado"),
        ('Mushroom Swiss Burger', "Brioche", "Beef", false, false, false, true, true, false, false, false, "Mushrooms"),
        ('Hawaiian Burger', "Sesame", "Beef", false, true, true, true, true, false, true, false, "Pineapple"),
        ('Vegie Burger', "Whole Wheat", "Veggie", false, true, true, true, true, true, false, true, null);`;
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