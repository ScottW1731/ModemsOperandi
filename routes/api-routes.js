// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var connection = require("../config/connection.js");
var db = require("../models");

module.exports = function (app) {

    /*Builds*/
    app.get("/api/builds/all", function (req, res) {
        var dbQuery = `SELECT * FROM builds`;
        connection.query(dbQuery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    // Get all builds of category type -- Byron
    app.get("/api/build/category", function (req, res) {
        db.Build.findAll({
            where: {
                category: req.params.category
            }
        }).then(function (dbBuild) {
            console.log(dbBuild);
            res.json(dbBuild);
        });
    });

    // Get build of certain name -- Byron
    app.get("/api/build/:name", function (req, res) {
        db.Build.findOne({
            where: {
                name: req.params.name
            }
        }).then(function (dbBuildName) {
            console.log(dbBuildName);
            res.json(dbBuildName);
        });
    });

    // Get build of Customer search Type, Price, Use Questionaire -- Byron
    app.get("/api/build/:", function (req, res) {
        db.Build.findAll({
            where: {
                type: req.params.type,
                price: req.params.price,
                use: req.params.use,
            }
        }).then(function (dbCustom) {
            console.log(dbCustom);
            res.json(dbCustom);
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

    // Delete Build -- Byron

    app.delete("/api/build/:id", function (req, res) {
        db.Build.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBuild) {
            res.json(dbBuild);
        });
    });
};