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

  }
}



// Ship it
module.exports = orm;