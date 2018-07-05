/**
 * Created by anmol on 5/7/18.
 */

const passport = require('passport')
const googleStrategy = require('./Strategies/googleStrategy')


// Serialize and deserialize the users

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});


// adding strategy in the passport

//google
passport.use(googleStrategy)





module.exports = passport
