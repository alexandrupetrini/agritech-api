'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sensors_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hardware_serial: {
        type: Sequelize.STRING(50)
      },
      port: {
        type: Sequelize.TINYINT
      },
      counter: {
        type: Sequelize.BIGINT
      },
      payload_raw: {
        type: Sequelize.BLOB('tiny')
      },
      time: {
        type: Sequelize.STRING(30)
      },
      frequency: {
        type: Sequelize.FLOAT(6, 3)
      },
      modulation: {
        type: Sequelize.STRING
      },
      data_rate: {
        type: Sequelize.STRING
      },
      airtime: {
        type: Sequelize.INTEGER
      },
      coding_rate: {
        type: Sequelize.STRING(3)
      },
      gateways: {
        type: Sequelize.TEXT
      },
      humidity: {
        type: Sequelize.FLOAT(3, 3)
      },
      temperature: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sensors_data');
  }
};
