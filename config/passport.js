const passport = require("passport");
const LocalStratery = require("passport-local").Strategy;
const User = require("../model/User");
const JwtStratery = require("passport-jwt").Strategy;
//
passport.use(
    new LocalStratery((username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false);
            user.comparePassword(passport, done);
        });
    })
);
//
const cookiesExtrator = (req) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
};
passport.user(
    new JwtStratery({
        jwtFromRequest: cookiesExtrator,
        secretOrKey: "Minh Tuan",
    }),
    (payload, done) => {
        User.findById({ _id: payload.sub }, (err, user) => {
            if (err) return done(err, false);
            if (user) return done(null, user);
            else return done(null, false);
        });
    }
);
