// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var connection = require("../config/connection.js");

module.exports = function (app) {

    /*Builds*/
    app.get("/api/builds/all", function (req, res) {
        var dbQuery = `SELECT * FROM builds`;
        connection.query(dbQuery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    app.post("/api/builds/new", function (req, res) {
        console.log(req.body);

        var dbQuery = "INSERT INTO builds (customerId, name, buildType) VALUES (?,?,?)";

        connection.query(dbQuery, [req.body.author, req.body.body, req.body.created_at], function (err, result) {
            if (err) throw err;
            console.log("builds Successfully Saved!");
            res.end();
        });
    });
};