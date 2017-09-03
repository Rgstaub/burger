const mysql = require('mysql');

// Connection to the mySql database
const db = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_db"
})

db.connect( (err, res) => {
  if (err) throw err;
  console.log(`Successfull connection to the database`);
})

// Export the configuration to connect to the database
module.exports = db;