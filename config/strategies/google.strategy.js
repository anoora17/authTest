var passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

module.exports = function(){
	passport.use(new GoogleStrategy({
	            clientID: '895756253092-c7nsqu016mgpfij2eaa1iffqtvpngsol.apps.googleusercontent.com',
	            clientSecret: 'nOgdzkb0eYz3E-peYykAPzJr',
	            callbackURL: 'http://localhost:3000/auth/google/callback'
	        },
	        function (req, accessToken, refreshToken, profile, done) {
	            var user = {};

	            user.email = profile.emails[0].value;
	            user.image = profile._json.image.url;
	            user.displayName = profile.displayName;

	            user.google = {};
	            user.google.id = profile.id;
	            user.google.token = accessToken;

	            done(null, user);
	        }
	    ));





};
