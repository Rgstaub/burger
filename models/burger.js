let orm = require('../config/orm.js');

// Make the burger!
let burgers = {
  // Add the ORM methods
  getAll: (cb) => {
    orm.selectAll(cb);
  },
  addOne: (name) => {
    orm.insertOne(name);
  }


  // q: orm,
  // // Add the name
  // this.name = incoming;
  // this.id = this.q.insertOne(this.name, function(response) {
  //   console.log(`Created '${incoming}', ID# ${response}`);
  // })
}

module.exports = burgers;