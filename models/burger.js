let orm = require('../config/orm.js');

// Make the burger!
const Burger = function() {
  // Add the ORM methods
  this.q = orm;
  // Add the name
  this.name = "";
}

module.exports = Burger;