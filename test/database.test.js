var expect = require("chai").expect;
var mysql = require('mysql');

//Pull .env variables
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

var connection;

describe("canary test", function () {
    it("should pass this canary test", function () {
        expect(true).to.be.true;
    });
});

describe("Can Connect", function () {
    it("should connect to local mysql instance", function (done) {
        connection = connection || mysql.createConnection(config);
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

// TODO: Create these tables from schema.sql
describe("Can Create Tables", function () {
    it("should create db and table(s)", function (done) {
        connection = connection || mysql.createConnection(config);
        var sql = `
                drop table if exists builds;
                drop table if exists parts;
                drop table if exists customers;

                create table builds
                (
                    id int not null AUTO_INCREMENT,
                    name varchar(150),
                    cost float,
                    parts varchar(500),
                    primary key(id)
                );
                
                create table parts
                (
                    id int not null AUTO_INCREMENT,
                    name varchar(150),
                    cost double(12, 2),
                    buildId int,
                    primary key(id)
                );

                create table customers(
                    id int not null auto_increment,
                    name varchar(150),
                    primary key(id)
                );
                `;
        connection.query(sql, function (err, result) {
            if (err) done(err);
            else done();
        });
    });
});

// TODO: Create these tables from seed.sql
describe("Can Create Builds", function () {
    it("should create several builds", function (done) {
        connection = connection || mysql.createConnection(config);
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
        connection = connection || mysql.createConnection(config);
        var sql = "delete from builds where id = 12345";
        connection.query(sql, function (err, result) {
            if (err) done(err);
            else {
                console.log("delete complete!");
                done();
            }
        })
    });
});