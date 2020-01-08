// services/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/back-office/User');

passport.serializeUser((user, done) => {
	done(null, user.id);
});
 
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});
 
passport.use(new LocalStrategy(
	{ usernameField: 'email' },
	(email, password, next) => {
		User.findByEmailAndPassword(email, password, (err, user) => {
			if (err) return next(err);

			if (!user) return next(null, false);

			return next(null, user);
		});
	}
));
 