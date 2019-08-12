var ttn = require('ttn');
var dbConnection = require('../config/db');
var ttnConnection = require('../config/ttn');

var TTN = function() {};

TTN.store = function() {
  ttn
    .data(ttnConnection.appID, ttnConnection.accessKey)
    .then(function(client) {
      console.log('Expecting uplink from app', ttnConnection.appID);
      client.on('uplink', async function(devID, payload) {
        console.log('Received uplink from', devID);

        if (payload.counter != undefined) {
          // Do not convert the date time to local timezone.
          // payload.metadata.time: The timezone is zero UTC offset
          // Keep it in UTC format, users can convert the date time to their local time zone.
          //
          // The Things Network, the time is measured with 9 digits fractional-seconds, example: '2018-12-27T14:39:12.420921047Z'
          // There are two issues.
          // - Moment.js is a wrapper for the Date object in JavaScript, and is limited to three decimal places (milliseconds).
          //   This is because that is all that the date object supports.
          // - MySQL 5.7 has fractional seconds support for DATETIME with up to microseconds (6 digits) precision:
          //   See: https://dev.mysql.com/doc/refman/5.7/en/fractional-seconds.html
          //
          // Using this solution will lose some microseconds precision:
          // const time = moment(payload.metadata.time).utc().format('YYYY-MM-DD HH:mm:ss.SSSSSS');
          // Because of this I have decided to store the time as a VARCHAR and NOT as a DATETIME(6)
          //

          var values = {
            hardware_serial: payload.hardware_serial,
            port: payload.port,
            counter: payload.counter,
            payload_raw: payload.payload_raw,
            time: payload.metadata.time,
            frequency: payload.metadata.frequency,
            modulation: payload.metadata.modulation,
            data_rate: payload.metadata.data_rate,
            airtime: payload.metadata.airtime,
            coding_rate: payload.metadata.coding_rate,
            gateways: JSON.stringify(payload.metadata.gateways),
            humidity: payload.payload_fields.humidity / 100,
            temperature: payload.payload_fields.temperature
          };

          var collumns = Object.keys(values);
          var collumnsValues = Object.values(values);
          var placeholders = collumns.map((name) => '?').join(',');
          var query =
            'INSERT INTO sensor_data(' +
            collumns.toString() +
            ') VALUES (' +
            placeholders +
            ')';
          // console.log(query);

          dbConnection.serialize(function() {
            dbConnection.run(query, collumnsValues, function(err) {
              if (err) {
                return console.error(err.message);
              }
              console.log(`A row has been inserted with rowid ${this.lastID}`);
            });
          });
        }
      });
    })
    .catch(function(error) {
      console.error('Error', error);
      process.exit(1);
    });
};

module.exports = TTN;
