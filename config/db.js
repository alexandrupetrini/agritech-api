var mysql = require('mysql');

//local mysql db connection
var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'agritech',
    password: 'wantdigitalnation',
    database: 'agritech_ttn'
});

dbConnection.connect(function (err) {
    if (err) throw err;
    console.log('Dababase connected');
});

module.exports = dbConnection;