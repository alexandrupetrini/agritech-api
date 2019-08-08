var ttn = require('ttn');
var dbConnection = require('../config/db')
var ttnConnection = require('../config/ttn');

var TTNData = function () {
};

TTNData.store = function () {
    ttn
        .data(ttnConnection.appID, ttnConnection.accessKey)
        .then(function (client) {
            console.log('Expecting uplink from app', ttnConnection.appID);
            client.on('uplink', async function (devID, payload) {
                console.log('Received uplink from', devID);

                if (payload.counter != undefined) {
                    console.log(payload);

                    var hardware_serial = payload.hardware_serial;
                    var port = payload.port;
                    var counter = payload.counter;
                    var payload_raw = payload.payload_raw;

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

                    var time = payload.metadata.time;
                    var frequency = payload.metadata.frequency;
                    var modulation = payload.metadata.modulation;
                    var data_rate = payload.metadata.data_rate;
                    var airtime = payload.metadata.airtime;
                    var coding_rate = payload.metadata.coding_rate;
                    var gateways = JSON.stringify(payload.metadata.gateways);
                    var humidity = payload.payload_fields.humidity / 100;
                    var temperature = payload.payload_fields.temperature;

                    // console.log('hardware_serial=', hardware_serial);
                    // console.log('port=', port);
                    // console.log('counter=', counter);
                    // console.log('payload_raw=', payload_raw);
                    // console.log('time=', time);
                    // console.log('frequency=', frequency);
                    // console.log('modulation=', modulation);
                    // console.log('data_rate=', data_rate);
                    // console.log('airtime=', airtime);
                    // console.log('coding_rate=', coding_rate);
                    // console.log('gateways=', gateways);

                    const query = 'INSERT INTO sensor_data SET ?';
                    const values = {
                        hardware_serial: hardware_serial,
                        port: port,
                        counter: counter,
                        payload_raw: payload_raw,
                        time: time,
                        frequency: frequency,
                        modulation: modulation,
                        data_rate: data_rate,
                        airtime: airtime,
                        coding_rate: coding_rate,
                        gateways: gateways,
                        humidity: humidity,
                        temperature: temperature
                    };

                    dbConnection.query(query, values, function (err, results) {
                        if (err) throw err;
                        console.log('Record inserted: ', results.insertId);
                    });
                }
            });
        })
        .catch(function (error) {
            console.error('Error', error);
            process.exit(1);
        });
}

module.exports = TTNData;