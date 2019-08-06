'user strict';

var table = {
    'name': 'sensor_data',
    'collumns': ['time', 'temperature', 'humidity']
}

var sql = require('../config/db');
var moment = require('moment')

var Table = function (table) {
    this.table = table.name;
    this.collumns = table.collumns;
};

Table.echo_data = function (result) {
    result(null, 'data');
};

Table.getSensorsData = function (result) {
    let query = "SELECT " + table.collumns.toString() + " FROM " + table.name;

    sql.query(query, function (err, rows) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            let data = [];
            console.log("Data retrieved from table 'sensor_data'");
            rows.forEach(row => {
                let date = moment(row.time).format("YYYY-MM-DD");
                let hours = moment(row.time).format("hh");
                let minutes = moment(row.time).format("mm");
                let time_only_in_hours = parseInt(hours, 10) + parseInt(minutes, 10) / 60;
                time_only_in_hours += "PM";
                data.push({
                    Data: date,
                    Ora: time_only_in_hours,
                    Temperatura: row.temperature,
                    Umiditate: row.humidity,
                });
            });
            result(null, data);

        }
    });
};

module.exports = Table;
