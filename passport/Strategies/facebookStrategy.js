/**
 * Created by anmol on 5/7/18.
 */

const FacebookStrategy=require('passport-facebook').Strategy;
const auth = require('../../Auth/auth')


module.exports = new FacebookStrategy({
    clientId : ,
    clientSecret : ,
    callbackUrl : ,
    passReqToCallback : false ,
},(accessToken , refreshToken , profile , cb)=>{



});