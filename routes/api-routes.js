// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

require("../config/connection.js");
var db = require("../models");

module.exports = function (app) {

    /*Builds*/
    app.get("/api/builds/all", function (req, res) {
        db.Build.findAll({
            include: [db.Customer], //unsecure as it exposes the 'id'
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
            include: [db.Customer]
        }).then(function (data) {
            res.json(data);
        });
    });

    // Get build of certain name -- Byron
    app.get("/api/build/:name", function (req, res) {
        db.Build.findOne({
            where: {
                name: req.params.name
            },
            include: [db.Customer],
        }).then(function (data) {
            res.json(data);
        });
    });

    // Get build of Customer search Type, Price, Use Questionaire -- Byron
    app.get("/api/builds/:", function (req, res) {
        db.Build.findAll({
            where: {
                category: req.params.category,
                price: req.params.price,
                use: req.params.use,
            },
            include: [db.Customer],
        }).then(function (build) {
            res.json(build);
        });
    });

    app.post("/api/builds/new", function (req, res) {
        //todo: if no customer, customerId is set to null.
        db.Build.create(req.body).then(function (build) {
            res.json(build)
        });
    });

    // Delete Build -- Byron
    app.delete("/api/delete/build/:id", function (req, res) {
        db.Build.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (build) {
            res.json(build);
        });
    });
};