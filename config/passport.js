var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
  
  var User = user;

  var localStrategy = require('passport-local').Strategy;
  
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(users.erros, null);
      }
    });
  });

  passport.use("local-signup", new localStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
  }, function(req, email, password, done) {
      var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

      User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        if (user) {
          return done(null, false, { message: "That email is already taken"});
        } else {
          var userPassword = generateHash(password);
          var data = {
            email: email,
            password: userPassword,
          };
          User.create(data).then(function(newUser, created) {
            if (!newUser) {
              return done(null, false);
            }
            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
  }));

  passport.use("local-signin", new localStrategy({
    usernameField: "email",
    password: "password",
    passReqToCallback: true
  }, function(req, email, password, done) {
    var User = user;

    var isValidPassword = function(userpass, password) {
      return bCrypt.compareSync(password, userpass);
    }

    User.findOne({
      where: {
        email: email
      }
    }).then(function(user) {
      if (!user) {
        return done(null, false, {
          message: "Email does not exist"
        });
      }

      if (!isValidPassword(user.password, password)) {
        return done(null, false, {
          message: "Incorrect Password."
        });
      }

      var userInfo = user.get();
      return done(null, userInfo);
    }).catch(function(err) {
      console.log("Error:", err);

      return done(null, false, {
        message: "Something went wrong with your signin"
      });
    });
  }));
};
