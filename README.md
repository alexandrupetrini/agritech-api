## Files worked on
* [bin/www](api/routes/sensorsData.js) - changed port from 3000 to 9000
* [app.js](app.js) - registered cors module and routes /sensorsData and [/testAPI](api/routes/testAPI.js) (just for testing and to be removed)
* [db.js](config/db.js) - database connection 
* [ttn.js](config/ttn.js) - [thethingsnetwork.org](thethingsnetwork.org) connection
* [sensorsData.js](routes/sensorsData.js) - actual route from where we get data in json format
* [tableModel.js](model/tableModel.js) - javascript Model class for accessing "sensors_data" table from "agritech_ttn" database
* [tableController](controller/tableController.js) - javascript Controller class for passing it's methods to views

## ToDo
* Integrate [thethingsnetwork.org](thethingsnetwork.org) connection into a functionality that always downloads and writes data into the database
* Notifications for out of scope sensor data
* Remove unnecessary files
* Package vulnerabilities: to be researched and fixed
* Security: to be researched and implemented
* Making README.md a proper README file
