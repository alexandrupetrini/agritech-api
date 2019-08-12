'use strict';
var SensorsDataTable = require('../models/sensorsDataModel');

exports.get_sensors_data = function(req, res) {
  SensorsDataTable.getSensorsData(function(err, data) {
    if (err) res.send(err);
    res.json(data);
  });
};

exports.echo_data = function(req, res) {
  SensorsDataTable.echo_data(function(err, result) {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};
