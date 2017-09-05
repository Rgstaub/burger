let orm = require('../config/orm.js');

// Add the ORM methods
let burgers = {

  getAll: (cb) => {
    orm.selectAll(cb);
  },
  getSome: (columns, values, cb) => {
    orm.filteredSelect(columns, values, cb)
  },
  addOne: (newBurger) => {
    orm.insertOne(newBurger);
  },
  eatOne: (id) => {
    orm.updateOne(id);
  },
  refreshAll: () => {
    orm.refreshAll();
  },
  clearEaten: () => {
    orm.clearDevoured();
  }
}

module.exports = burgers;