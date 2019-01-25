// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql https://tinyurl.com/yafmcp2b
var mysql = require("mysql");
var path = require('path');
var dotenvPath = path.resolve('./.env');
require('dotenv').config({
    path: dotenvPath
});

const Password = process.env.Password;
const JAWSDB_URL = process.env.JAWSDB_URL;

const config = {
    database: "pc_builder", // TODO: set this from config.json > development vars
    user: "root",
    host: "localhost",
    password: Password || "root",
    port: 3306,
    timeout: 3600,
    multipleStatements: true,
}

var connection;

if (JAWSDB_URL) {
    connection = mysql.createConnection(JAWSDB_URL);
    console.log('Connected to JawsDB')
} else {
    connection = mysql.createConnection(config);
    console.log('Connected to ' + config.host + " " + config.port)
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;