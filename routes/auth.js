var express = require('express');
var passport = require('passport');
var  router = express.Router();


// router.route('auth/google/callback').get(passport.authenticat('google',{
// 	successRedirect:'/users/',
// 	failure:'/error/'
// }));
//
// router.route('auth/google')
// .get(passport.authenticate('google',{ scope:
//   	[ 'https://www.googleapis.com/auth/userinfo.profile',
//   	, 'https://www.googleapis.com/auth/userinfo.email',
// 	 ]} ));

	 router.route('/auth/google',
	   passport.authenticate('google', { scope:
	   	[ 'https://www.googleapis.com/auth/plus.login',
	   	, 'https://www.googleapis.com/auth/plus.profile.emails.read' ] }
	 ));

	 router.route( '/auth/google/callback',
	     passport.authenticate( 'google', {
	         successRedirect: '/auth/google/success',
	         failureRedirect: '/auth/google/failure'
	 }));
module.exports = router;
