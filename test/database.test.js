var expect = require("chai").expect;
var mysql = require('mysql');
var connection;

const config = {
    database: "build_test",
    password: "birman",
    user: "root",
    host: "localhost",
    port: 3306,
    timeout: 3600,
    multipleStatements: true,
}

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


describe.skip("Can Create Builds", function () {
    it("should create several builds", function (done) {
        connection = mysql.createConnection(config) || connection;
        var sql = `
        
        
        `;
        connection.query(sql, function (err, result) {
            if (err) done(err);
            else {
                console.log("delete complete!");
                done();
            }
        })
    });
});

describe.skip("Can Delete a Build", function () {
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