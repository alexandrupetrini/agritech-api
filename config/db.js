var mysql = require('mysql');
var dotenv = require('dotenv').config();

//local mysql db connection
var dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log('Dababase connected');
});

module.exports = dbConnection;
