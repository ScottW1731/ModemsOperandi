// var path = require("path");

module.exports = function(app, passport) {
  //landing page
  app.get("/", function(req, res) {
    var reqPath = req.protocol + "://" + req.get("host");
    res.render("index", {
      main_image: reqPath + "/images/rafael-pol-474017-unsplash.jpg",
      image_url: reqPath + "/images/darkroom.jpg"
    });
  });

  //Signup Page
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/profile",
      failureRedirect: "/signup"
      })
  );

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.post("/login", passport.authenticate("local-signin", {
    successRedirect: "profile",
    failureRedirect: "login"
  }));

  app.get("/profile", isLoggedIn, function(req, res) {
    console.log(req.user);
    var profile = req.user;
    res.render("profile", { 
      id: profile.id,
      email: profile.email,
      password: profile.password
    });
  });
};

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/");
}
