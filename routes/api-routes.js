// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var connection = require("../config/connection.js");
var db = require("../models");

module.exports = function (app) {

    //TODO: Abstractify this query using Sequelize (reason: db may not always be mysql dialect!)
    app.get("/api/build/types", function (req, res) {
        connection.query("select distinct * from build_types", function (err, result, fields) {
            if (err) throw err;
            res.json(result)
        })
    });

    //TODO: Abstractify this query using Sequelize (reason: db may not always be mysql dialect!)
    app.get("/api/part/categories", function (req, res) {
        connection.query("select distinct * from categories", function (err, result, fields) {
            if (err) throw err;
            res.json(result)
        })
    });

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
            include: [db.Customer],
        }).then(function (data) {
            res.json(data);
        });
    });

    // Get build of certain name -- Byron
    app.get("/api/build/:name", function (req, res) {
        if (!req.params.name) throw Error("build name cannot be null!");
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

    // update build -- Byron
    app.put("/api/builds", function (req, res) {
        db.Build.update({
            name: req.body.name,
            category: req.body.category,
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbBuild) {
            res.json(dbBuild);
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

    // update parts --Byron
    app.put("/api/parts", function (req, res) {

        db.Part.update({
            name: req.body.name,
            cost: req.body.cost,
            categoryId: req.body.categoryId,
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbPart) {
            res.json(dbPart);
        });
    })

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

    // Get a customer's full profile, including builds, parts, cost, email, etc.
    //TODO: Abstractify this query using Sequelize (reason: db may not always be mysql dialect!)
    app.get("/api/customers/:id", function (req, res) {
        if (!req.params.id) throw Error("customer id cannot not be null!");
        connection.query(`        
            select c.name, c.email, b.name, b.category, p.name, p.cost
            from customers c
                join builds b
            on c.id = b.customerId
                join build_parts_xref bps
            on b.id = bps.buildId
                join parts p
            on p.id = bps.partId;
        `, function (err, result, fields) {
            if (err) throw err;
            res.json(result);
        })
    })
}