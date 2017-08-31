let orm = require('../config/orm.js');

// Add the ORM methods
let burgers = {

  getAll: (cb) => {
    orm.selectAll(cb);
  },
  addOne: (name) => {
    orm.insertOne(name);
  },
  eatOne: (id) => {
    orm.updateOne(id);
  }
}

module.exports = burgers;