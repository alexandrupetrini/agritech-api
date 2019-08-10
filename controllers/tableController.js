'use strict';
var Table = require("../models/tableModel")

exports.get_sensors_data = function (req, res) {
    Table.getSensorsData(function (err, data) {
        console.log('Table Controller');
        if (err)
            res.send(err);
        res.json(data);
    });
};

exports.echo_data = function (req, res) {
    Table.echo_data(function (err, result) {
        if (err) {
            res.send(err);
        }
        res.send(result);
    });
};