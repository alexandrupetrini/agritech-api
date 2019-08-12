var sqlite3 = require('sqlite3');
var dotenv = require('dotenv').config();
var sqlite3 = require('sqlite3').verbose();

//local mysql db connection
var dbConnection = new sqlite3.Database(
  (path = process.env.DB_DATABASE),
  (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to', process.env.DB_DATABASE, 'database');
  }
);
module.exports = dbConnection;
