## Files worked on
* [bin/www](routes/sensorsData.js) - changed port from 3000 to 9000
* [app.js](app.js) - registered "cors" NodeJS module and routes [/sensorsData](routes/sensorsData.js) and [/testAPI](routes/testAPI.js) (just for testing and to be removed)
* [db.js](config/db.js) - database connection 
* [ttn.js](config/ttn.js) - [thethingsnetwork.org](https://thethingsnetwork.org/) console connection
* [sensorsData.js](routes/sensorsData.js) - actual route from where we get data in json format
* [tableModel.js](model/tableModel.js) - javascript Model class for accessing "sensors_data" table from "agritech_ttn" database
* [tableController](controller/tableController.js) - javascript Controller class for passing it's methods to views
### Note: Checkout [MVC pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)!

## ToDo
* Integrate [thethingsnetwork.org](https://thethingsnetwork.org/) connection into a functionality that always downloads and writes data into the database
* Notifications for out of scope sensor data
* Remove unnecessary files
* Package vulnerabilities: to be researched and fixed
* Security: to be researched and implemented
* Making this [README.md](README.md) a proper README file
