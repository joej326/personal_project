const express = require('express');
const session = require('express-session');
const passport = require('passport');
const request = require('request');
const bodyParser = require('body-parser');
const massive = require('massive');
const Auth0Strategy = require('passport-auth0');
const config = require('../.config');



const app = module.exports = express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(session({
	secret: config.secret,
	resave: false,	//wont override info if the user visits a second, third time
	saveUninitialized: false //if the user does nothing, dont create a session
}));

app.use(passport.initialize());/////MUST BE IN THIS ORDER OR IT WON'T WORK
app.use(passport.session());//////

passport.use(new Auth0Strategy({
  domain: config.auth0.domain,
  clientID: config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: config.auth0.callbackURL
}, function(accessToken, refreshToken, extraParams, profile, done) {
	// This is for us to access OUR database.
	// We can find the users record in our database using profile.id
	// Or we can create a user record if they don't exit (haven't visited our website yet)

  return done(null, profile);
}));

app.get('/auth', passport.authenticate('auth0'));//'auth0' says what we want to use auth0 to login

app.get('/auth/callback', //this MUST match the 'callbackURL above'
passport.authenticate('auth0', {successRedirect: '/#!/', failureRedirect: '/failedAuth'}));

app.get('/failedAuth', function(req, res) {
	res.status(500).send('Cannot login at this time')
})

passport.serializeUser(function(user,done){ //'done' works like 'next'
  return done(null,user); // codes to put on session!
});

passport.deserializeUser(function(user, done){ //decodes to put on req.user
  return done(null, user); //return wasnt here before
});


app.get('/auth/me', function(req, res) {
	if (!req.isAuthenticated()) {
		return res.status(200).send('not authenticated')
	} else {
		return res.json(req.user);
	}
})

var massiveUri = config.massiveUri;

var massiveServer = massive.connectSync({
	connectionString: massiveUri
});


var db = app.get('db');
app.set('db', massiveServer);
const mainCtrl = require('./controllers/mainCtrl.js');
const orderCtrl = require('./controllers/orderCtrl.js');
const productCtrl = require('./controllers/productCtrl.js');
const userCtrl = require('./controllers/userCtrl.js');


	// db.getLongboards((err,longboards) => {
	//
	// 	switch (req.query.color) {
	// 		case 'blue':
	// 			console.log(req.query.color);
	// 			db.getBlueLongboards((err,blueLongboards) => {
	// 				res.send(blueLongboards)
	// 			})
	// 			break;
	// 		case 'red':
	// 			console.log(req.query.color);
	// 			db.getRedLongboards((err,redLongboards) => {
	// 				res.send(redLongboards);
	// 			})
	// 			break;
	// 		case 'white':
	// 			console.log(req.query.color);
	// 			db.getWhiteLongboards((err,whiteLongboards) => {
	// 				res.send(whiteLongboards);
	// 			})
	// 			break;
	// 			default: res.send(longboards);
	// 	}
	//
	//
	//
	// })

app.get('/api/longboards', mainCtrl.filterColors);
app.get('/api/longboards/:id', mainCtrl.getSingleBoard);
app.post('/api/cart/',mainCtrl.addToCart);
app.delete('/api/cart/',mainCtrl.removeBoard);





















app.listen(8000,()=>{
  console.log('show time, folks.');
})
