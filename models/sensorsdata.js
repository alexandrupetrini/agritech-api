'use strict';
module.exports = (sequelize, DataTypes) => {
  const sensorsData = sequelize.define(
    'sensors_data',
    {
      hardware_serial: DataTypes.STRING(50),
      port: DataTypes.TINYINT,
      counter: DataTypes.BIGINT,
      payload_raw: DataTypes.BLOB('tiny'),
      time: DataTypes.STRING(30),
      frequency: DataTypes.FLOAT(6, 3),
      modulation: DataTypes.STRING,
      data_rate: DataTypes.STRING,
      airtime: DataTypes.INTEGER,
      coding_rate: DataTypes.STRING(3),
      gateways: DataTypes.TEXT,
      humidity: DataTypes.FLOAT(3, 3),
      temperature: DataTypes.INTEGER
    },
    {}
  );
  sensorsData.associate = function(models) {
    // associations can be defined here
  };
  return sensorsData;
};
