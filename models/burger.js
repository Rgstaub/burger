let orm = require('../config/orm.js');

// Add the ORM methods
let burgers = {

  getAll: (cb) => {
    orm.selectAll(cb);
  },
  addOne: (name) => {
    orm.insertOne(name);
  },
  eatOne: (id, cb) => {
    orm.updateOne(id, cb);
  },
  refreshAll: () => {
    orm.refreshAll();
  },
  clearEaten: () => {
    orm.clearDevoured();
  }
}

module.exports = burgers;