import passport from "passport";
import googleOauth from "passport-google-oauth";
import config from "../config";
import models from "../models/index";
const GoogleStrategy = googleOauth.OAuth2Strategy;

passport.use(new GoogleStrategy({
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackUrl
    },
    function(token, tokenSecret, profile, done) {
      models.User
        .findOne({
          where: { $or: [{ googleId: profile.id }, { email:  profile.emails ? profile.emails[0].value : null }] }
        })
        .then(user => {
          if(user) return done(null, user);
         return done(null, false);
        });
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

export default passport;
