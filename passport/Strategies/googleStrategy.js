/**
 * Created by anmol on 5/7/18.
 */

const GoogleStrategy = require('passport-google-auth').Strategy;
const auth = require('../../Auth/auth')

module.exports = new GoogleOAuth2Strategy({
        clientId: auth.GoogleCredentials.clientId,
        clientSecret: auth.GoogleCredentials.clientSecret,
        callbackURL: 'https://www.example.com/auth/example/callback',
      //  passReqToCallback : true   (very important to pass req to the callback)
    },
    function(accessToken, refreshToken, profile, done) {

        console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::')
        console.log('Access Token : ' + accessToken)
        console.log('::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::')

        // req.session.code = accessToken -> So that you can make this token access in session




    }
);