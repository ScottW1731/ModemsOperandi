var expect = require("chai").expect;
var mysql = require('mysql');

//Pull .env variables
var path = require('path');
var dotenvPath = path.resolve('./.env');
require('dotenv').config({
    path: dotenvPath
});
const Password = process.env.Password;

//Initialize config from .env
const config = {
    database: "build_test",
    user: "root",
    host: "localhost",
    password: Password,
    port: 3306,
    timeout: 3600,
    multipleStatements: true,
}

var connection;

describe("canary test", function () {
    it("should pass this canary test", function () {
        expect(true).to.be.true;
    });
});

describe("Can Connect", function () {
    it("should connect to local mysql instance", function (done) {
        connection = mysql.createConnection(config) || connection;
        connection.connect(function (err) {
            if (err) done(err);
            else {
                console.log('Connected to database ' + config.database + " on port " + config.port);
                done();
            }
        })
        connection.end();
    });
});

describe("Can Create a Table", function () {
    it("should create db and table(s)", function (done) {
        connection = mysql.createConnection(config) || connection;
        var sql = `
                use build_test;
                drop table if exists builds;
                drop table if exists parts;
                create table builds
                (
                    id int not null AUTO_INCREMENT,
                    name varchar(150),
                    cost float,
                    parts varchar(500),
                    primary key(id)
                );
                `;
        connection.query(sql, function (err, result) {
            if (err) done(err);
            else done();
        });
    });
});

describe("Can Create Builds", function () {
    it("should create several builds", function (done) {
        connection = mysql.createConnection(config) || connection;
        var sql =
            `insert into customers(id, name) values(1138, "mike");
            insert into builds(id, customerId, name) values(12345, 1138, "super-special-awesum build");
            insert into parts(buildId, name, cost) values(12345, "Intel Core i3-8100", 118.99);
            insert into parts(buildId, name, cost) values(12345, "Gigabyte B360M DSH3H", 74.99);
            insert into parts(buildId, name, cost) values(12345, "MSI Radeon RX 580 GB Armor", 209.99);`;

        connection.query(sql, function (err, result) {
            if (err) done(err);
            else {
                console.log("create complete!");
                done();
            }
        })
    });
});

describe("Can Delete a Build", function () {
    it("should delete a build", function (done) {
        connection = mysql.createConnection(config) || connection;
        var sql = "delete from builds where id = 1";
        connection.query(sql, function (err, result) {
            if (err) done(err);
            else {
                console.log("delete complete!");
                done();
            }
        })
    });
});