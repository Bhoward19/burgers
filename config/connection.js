var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_AQUA_URL)  {
	connection = mysql.createConnection(process.env.JAWSDB_AQUA_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};


connection.connect();
module.exports = connection;