const mysql = require('mysql');

// Connection to the mySql database
const db = mysql.createConnection({
    host: "localhost",
    name: "root",
    password: "root",
    database: "burger_db"
})

// Export the configuration to connect to the database
module.exports = db;