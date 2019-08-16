'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'sensors_data',
      [
        {
          hardware_serial: '70B3D5499243F193',
          port: 1,
          counter: 99,
          payload_raw: ' 0',
          time: '2019-07-30T09:19:45.718185472Z',
          frequency: 868.1,
          modulation: 'LORA',
          data_rate: 'SF7BW125',
          airtime: 46336000,
          coding_rate: '4/5',
          gateways:
            '[{"gtw_id":"eui-30aea4fffe2cf768","timestamp":3496203105,"time":"2019-07-30T09:19:45.652395Z","channel":0,"rssi":-19,"snr":7,"rf_chain":0,"latitude":44.434933,"longitude":26.04587,"altitude":15,"location_source":"registry"}]',
          humidity: 0.48,
          temperature: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hardware_serial: '70B3D5499243F193',
          port: 1,
          counter: 1,
          payload_raw: ' _',
          time: '2019-07-30T09:20:33.871020907Z',
          frequency: 868.1,
          modulation: 'LORA',
          data_rate: 'SF7BW125',
          airtime: 46336000,
          coding_rate: '4/5',
          gateways:
            '[{"gtw_id":"eui-30aea4fffe2cf768","timestamp":3544350807,"time":"2019-07-30T09:20:33.799332Z","channel":0,"rssi":-20,"snr":6,"rf_chain":0,"latitude":44.434933,"longitude":26.04587,"altitude":15,"location_source":"registry"}]',
          humidity: 0.95,
          temperature: 24,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hardware_serial: '70B3D5499243F193',
          port: 1,
          counter: 6,
          payload_raw: ' .',
          time: '2019-07-30T09:22:21.851553674Z',
          frequency: 868.1,
          modulation: 'LORA',
          data_rate: 'SF7BW125',
          airtime: 46336000,
          coding_rate: '4/5',
          gateways:
            '[{"gtw_id":"eui-30aea4fffe2cf768","timestamp":3652336572,"time":"2019-07-30T09:22:21.785326Z","channel":0,"rssi":-18,"snr":6,"rf_chain":0,"latitude":44.434933,"longitude":26.04587,"altitude":15,"location_source":"registry"}]',
          humidity: 0.46,
          temperature: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hardware_serial: '70B3D5499243F193',
          port: 1,
          counter: 9,
          payload_raw: ' 0',
          time: '2019-07-30T09:23:26.642579451Z',
          frequency: 868.1,
          modulation: 'LORA',
          data_rate: 'SF7BW125',
          airtime: 46336000,
          coding_rate: '4/5',
          gateways:
            '[{"gtw_id":"eui-30aea4fffe2cf768","timestamp":3717126435,"time":"2019-07-30T09:23:26.575442Z","channel":0,"rssi":-20,"snr":6,"rf_chain":0,"latitude":44.434933,"longitude":26.04587,"altitude":15,"location_source":"registry"}]',
          humidity: 0.48,
          temperature: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('sensors_data', null, {});
  }
};
