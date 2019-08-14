'use strict';

var table = {
  name: 'sensor_data',
  collumns: ['time', 'temperature', 'humidity', 'gateways']
};

var dbConnection = require('../config/db');
var moment = require('moment');

var SensorsDataTable = function(table) {
  this.table = table.name;
  this.collumns = table.collumns;
};

SensorsDataTable.echo_data = function(result) {
  result(null, 'data');
};

SensorsDataTable.getSensorsData = function(result) {
  let query = 'SELECT ' + table.collumns.toString() + ' FROM ' + table.name;

  dbConnection.serialize(function() {
    dbConnection.all(query, [], function(err, rows) {
      if (err) {
        console.log('error: ', err);
        result(err, null);
      } else {
        let data = [];
        console.log("Data retrieved from table 'sensor_data'");
        rows.forEach((row) => {
          let date = moment(row.time).format('DD-MM-YYYY');
          let time = moment(row.time).format('HH:mm');
          let gateways = JSON.parse(row.gateways);
          let gateway = gateways[0];
          data.push({
            Data: date,
            Ora: time,
            Temperatura: row.temperature,
            Umiditate: row.humidity,
            Latitudine: gateway.latitude,
            Longitudine: gateway.longitude,
            Altitudine: gateway.altitude
          });
        });
        result(null, data);
      }
    });
  });
};
module.exports = SensorsDataTable;
