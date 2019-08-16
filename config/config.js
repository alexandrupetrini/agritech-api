'use strict';

var dotenv = require('dotenv').config();

let dbConnection = {};
switch (process.env.DB_DIALECT) {
  case 'sqlite':
  case 'sqlite3':
    dbConnection = {
      development: {
        dialect: 'sqlite',
        storage: process.env.DB_STORAGE
      },
      test: {
        dialect: 'sqlite',
        storage: ':memory:'
      },
      production: {
        dialect: 'sqlite',
        storage: process.env.DB_STORAGE
      }
    };
    break;
  case 'mysql':
  case 'mariadb':
    dbConnection = {
      development: {
        dialect: 'mysql',
        host: process.env.DB_HOSTNAME,
        port: process.env.DB_PORT || '3306',
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
      },
      test: {
        dialect: 'sqlite',
        storage: ':memory:'
      },
      production: {
        dialect: 'mysql',
        host: process.env.DB_HOSTNAME || '3306',
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
      }
    };
    break;
  default:
    throw new Error('Invalid database dialect');
}

module.exports = dbConnection;
