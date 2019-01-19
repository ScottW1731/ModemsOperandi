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

const config = {
    database: "build_test", // TODO: set this from config.json > development vars
    user: "root",
    host: "localhost",
    password: Password,
    port: 3306,
    timeout: 3600,
    multipleStatements: true,
}

var connection = mysql.createConnection(config);

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;