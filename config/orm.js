"use strict"

// Connect to the database
const db = require("./connections.js");

let orm = {
  // return all of the burgers
  selectAll: (cb) => {
    let queryStr = "SELECT * FROM burgers"
    db.query(queryStr, (err, res) => {
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
  }
}



// Ship it
module.exports = orm;