var expect = require("chai").expect;
var mysql = require('mysql');

const config = {
    database: "build_test",
    password: "birman",
    user: "root",
    host: "localhost",
    port: 3306,
    timeout: 3600,
}

describe("canary test", function () {
    it("should pass this canary test", function () {
        expect(true).to.be.true;
    });
});

describe("connection test", function () {
    it("should connect to local mysql instance", function (done) {
        var connection = mysql.createConnection(config);
        connection.connect(function (err) {
            if (err) done(err);
            else {
                console.log('Connected to database ' + config.database + "on port " + config.port);
                done();
            }
        })
        connection.end();
    });
});