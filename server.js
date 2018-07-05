/**
 * Created by anmol on 14/6/18.
 */


let express = require('express')
let bp = require('body-parser')
const passport = require('passport')
// const LinkedInStrategy = require('passport-linkedin')
const session=require('express-session');
const cp=require('cookie-parser');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

let request = require('request')

let app = express()

app.use(cp('somese2'));

app.use(session({
    secret:'somese2',
    resave:false,
    saveUninitialized:true
})
);

app.use(bp.urlencoded({extended:true}))

app.use(bp.json());

app.use(passport.initialize())
app.use(passport.session())
//
// passport.use(new LinkedInStrategy({
//         consumerKey: '78lqk3inthwoxc',
//         consumerSecret: '0R8QA7NnWO01t5z6',
//         callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
//     },
//     function(token, tokenSecret, profile, done) {
//
//         console.log('token : ' + profile)
//
//     }
// ));

passport.use(new LinkedInStrategy({
    clientID: '78lqk3inthwoxc',
    clientSecret: '0R8QA7NnWO01t5z6',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback",
    passReqToCallback: true
}, function(req,accessToken, refreshToken, profile, done) {
    console.log('accessToken ::++++',accessToken);
    console.log(req.session)
    req.session.code = accessToken

    process.nextTick(function () {
        return done(null, profile);
    });
}));


passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

// app.get('/',
//     passport.authenticate('linkedin'));


app.get('/' , (req,res)=>{

    console.log('Req session code here : ' + req.session.code)

 let url_form = 'https://api.linkedin.com/v1/companies/1327/updates?start=20&count=10&format=json&oauth2_access_token='+req.session.code
 let options = {
     method:'GET',
     url :url_form
 }
 request(options , function (error,response,body) {

     if (error) throw new Error(error)

     console.log(body)
 })

})

app.get('/auth/linkedin',
    passport.authenticate('linkedin'),
    function(req, res){
        // The request will be redirected to LinkedIn for authentication, so this
        // function will not be called.
    });



app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login'}))


app.listen(3000,()=>{
    console.log('Server Started')
})