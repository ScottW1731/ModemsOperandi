// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
require("dotenv").config();
var express = require("express");
var db = require("./models");
var exphbs = require("express-handlebars");
var session = require("express-session");
var passport = require("passport");
var bodyParser = require("body-parser");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
      extended: true
  })
);
app.use(express.json());

// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(
  session({
    secret: "iloveschotchscotchscotchscotch",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("public"));

// Routes
// =============================================================
require("./config/passport.js")(passport, db.customer);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app, passport);

// Starts the server to begin listening
// =============================================================

var syncOptions = {
  force: false
};

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });
});

module.exports = app;
