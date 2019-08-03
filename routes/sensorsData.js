var express = require('express');
var router = express.Router();
var TableController = require("../controller/tableController");

router.get('/', TableController.get_sensors_data);

module.exports = router;