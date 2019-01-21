// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
require("dotenv").config();
var express = require("express");
var db = require("./models");
var exphbs = require("express-handlebars");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================

var syncOptions = {
    force: false
};

db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on http://localhost:" + PORT);
    });
});

module.exports = app;