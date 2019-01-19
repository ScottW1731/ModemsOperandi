// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var connection = require("../config/connection.js");
var db = require("../models");

module.exports = function (app) {

    /*Builds*/
    app.get("/api/builds/all", function (req, res) {
        db.Build.findAll({
            include: [db.Customer], //unsecure as it exposes the 'id'
            raw: true
        }).then(function (build) {
            res.json(build);
        })
    });

    // Get all builds of category type -- Byron
    app.get("/api/builds/:category", function (req, res) {
        db.Build.findAll({
            where: {
                category: req.params.category
            },
        }).then(function (data) {
            res.json(data);
        });
    });

    // Get build of certain name -- Byron
    app.get("/api/build/:name", function (req, res) {
        db.Build.findOne({
            where: {
                name: req.params.name
            }
        }).then(function (data) {
            res.json(data);
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