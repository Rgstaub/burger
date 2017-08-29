"use strict"

// Connect to the database
const db = require("./connections.js");
db.connect( (err, res) => {
  if (err) throw err;
  console.log(`Successfull connection to the database`);
})

let orm = {
  // return an array of all burgers based on devoured boolean
  selectAll: (devoured) => {
    db.query("SELECT * FROM burgers WHERE devoured=?", devoured, (err, res) => {
      if (err) throw err;
      
    } )
  },
  insertOne: (id) => {
    console.log(`Burger ID ${id}`);
  }
}



// Ship it
module.exports = orm;