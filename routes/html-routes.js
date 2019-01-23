// var path = require("path");

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
        main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg",
      });
    } else {
      res.render("index", {
        link1: reqPath + "/login",
        text1: "Login",
        link2: reqPath + "/signup",
        text2: "Signup",
        main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg",
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

  app.post("/login", passport.authenticate("local-signin", {
    successRedirect: "/",
    failureRedirect: "login"
  }));

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
    })
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}
