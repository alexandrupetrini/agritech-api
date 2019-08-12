var express = require('express');
var router = express.Router();
var SensorsDataController = require('../controllers/sensorsDataController');

router.get('/', SensorsDataController.get_sensors_data);

module.exports = router;
