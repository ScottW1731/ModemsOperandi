// var path = require("path");

var db = require("../models");

module.exports = function(app, passport) {
  //landing page
  app.get("/", function(req, res) {
    var reqPath = req.protocol + "://" + req.get("host");
    if (req.isAuthenticated()) {
      res.render("index", {
        link1: reqPath + "/profile",
        text1: "Profile",
        link2: reqPath + "/logout",
        text2: "Logout",
        main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg"
      });
    } else {
      res.render("index", {
        link1: reqPath + "/login",
        text1: "Login",
        link2: reqPath + "/signup",
        text2: "Signup",
        main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg"
      });
    }
  });

  //Signup Page
  app.get("/signup", function(req, res) {
    var reqPath = req.protocol + "://" + req.get("host");
    res.render("signup", {
      login: reqPath + "/login",
      home: reqPath + "/"
    });
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "signup"
    })
  );

  app.get("/login", function(req, res) {
    var reqPath = req.protocol + "://" + req.get("host");
    res.render("login", {
      signup: reqPath + "/signup",
      home: reqPath + "/"
    });
  });

  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/",
      failureRedirect: "login"
    })
  );

  app.get("/profile", isLoggedIn, function(req, res) {
    var profile = req.user;
    var reqPath = req.protocol + "://" + req.get("host");
    res.render("profile", {
      id: profile.id,
      email: profile.email,
      password: profile.password,
      homeLink: reqPath + "/"
    });
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });

  app.get("/generatebuild", function(req, res) {
    var reqPath = req.protocol + "://" + req.get("host");
    if (req.isAuthenticated()) {
      res.render("buildgenerator", {
        link1: reqPath + "/profile",
        text1: "Profile",
        link2: reqPath + "/logout",
        text2: "Logout",
        main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg"
      });
    } else {
      res.render("buildgenerator", {
        link1: reqPath + "/login",
        text1: "Login",
        link2: reqPath + "/signup",
        text2: "Signup",
        main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg"
      });
    }
  });

  app.get("/build", function(req, res) {
    // var tbuild = db.pcBuild
    db.staticbuild.findAll({
      where: {
        id: 1
      }
    }).then(function(build) {
      console.log(build[0].dataValues);
      res.json(build);
    });
  });

  app.get("/apiroutes", function(req, res) {
    res.render("apiroutes");
  })

  app.get("/staticbuild", function(req, res) {
    var buildID = req.query['genBuild'];
    console.log(buildID);
    db.staticbuild.findAll({
      where: {
        id: buildID
      }
    }).then(function(build) {
      var reqPath = req.protocol + "://" + req.get("host");
      var pcBuild = [
        {
          Component: "CPU",
          Selection: build[0].dataValues.cpu,
          Price: build[0].dataValues.cpuprice
        },
        {
          Component: "Motherboard",
          Selection: build[0].dataValues.motherboard,
          Price: build[0].dataValues.motherboardprice
        },
        {
          Component: "Memory",
          Selection: build[0].dataValues.memory,
          Price: build[0].dataValues.memoryprice
        },
        {
          Component: "Storage",
          Selection: build[0].dataValues.storage,
          Price: build[0].dataValues.storageprice
        },
        {
          Component: "Video Card",
          Selection: build[0].dataValues.gpu,
          Price: build[0].dataValues.gpuprice
        },
        {
          Component: "Case",
          Selection: build[0].dataValues.cse,
          Price: build[0].dataValues.cseprice
        },
        {
          Component: "Power Supply",
          Selection: build[0].dataValues.powersupply,
          Price: build[0].dataValues.powersupplyprice
        },
        {
          Component: "Base Total:",
          Selection: null,
          Price: build[0].dataValues.price
        }
      ];
      if (req.isAuthenticated) {
        res.render("build", {
          link1: "/profile",
          text1: "Profile",
          link2: "/logout",
          text2: "Logout",
          main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg",
          pcBuild
        });
      } else {
        res.render("build", {
          link1: "/login",
          text1: "Login",
          link2: "/signup",
          text2: "Signup",
          main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg",
          pcBuild
        })
      }
    });
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}
