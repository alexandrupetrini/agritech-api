var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'agritech',
    password: 'agritech',
    database: 'agritech_ttn'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;