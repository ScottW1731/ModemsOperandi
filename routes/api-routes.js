// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

require("../config/connection.js");
var db = require("../models");

module.exports = function (app) {

    // TODO: getCategories() : 'select distinct name from categories'
    // TODO: getPartType() : "select distinct name from parts"

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
            },
            include: [db.Customer],
        }).then(function (build) {
            res.json(build);
        });
    });

    app.post("/api/builds/new", function (req, res) {
        //todo: if no customer, customerId is set to null.
        db.Build.create(req.body).then(function (build) {
            res.json(build);
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

    /*Parts*/
    app.get("/api/parts/all", function (req, res) {
        db.Part.findAll({}).then(function (parts) {
            res.json(parts);
        })
    });

    app.post("/api/parts/new", function (req, res) {
        db.Part.create(req.body).then(function (part) {
            res.json(part);
        });
    });

    /*Customers*/
    app.get("/api/customers/all", function (req, res) {
        db.Customer.findAll({}).then(function (customers) {
            res.json(customers);
        })
    });

    app.post("/api/customers/new", function (req, res) {
        db.Customer.create(req.body).then(function (customers) {
            res.json(customers);
        });
    });
};