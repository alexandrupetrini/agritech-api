var dotenv = require('dotenv').config();

const ttnConnection = {
  appID: process.env.TTN_APP_ID,
  accessKey: process.env.TTN_ACCESS_KEY
};

module.exports = ttnConnection;
