/**
 * Created by anmol on 5/7/18.
 */

// Require all sufficent libraries
const express = require('express')
const bp = require('body-parser')
const passport = require('./passport/PassPort')
const session=require('express-session');
const cp=require('cookie-parser');

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


/////////// Google ///////////////////////////////////////////////////////////

// Calling google passport auth
app.get('/login/google', passport.authenticate('google'))

// Google CallBack
app.get('/auth/callback/google',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect to your app.
        res.send({connect : 'google'});
    }
);



//////// FaceBook ///////////////////////////////////////////////////////////

app.get('/login/facebook',)

// Facebook callback
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.send({connect : 'Facebook'});
    })






