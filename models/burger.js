let orm = require('../config/orm.js');

// Make the burger!
const Burger = function(incoming) {
  // Add the ORM methods
  this.q = orm;
  // Add the name
  this.name = incoming;
  this.id = this.q.insertOne(this.name, function(response) {
    console.log(`Created '${incoming}', ID# ${response}`);
  })
}

module.exports = Burger;