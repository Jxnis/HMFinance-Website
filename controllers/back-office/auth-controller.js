const passport = require('passport');
const User = require('../../models/back-office/User');

const showSignup = (req, res) => {
	res.render('back-office/signup');
};

const showLogin = (req, res) => {
	res.render('back-office/login');
};

const createUser = (req, res) => {
	User.create(req.body, (err) => {
		if (err) return res.render('error', { err });
 
		res.redirect('/auth/login');
	});
};

const authenticateUser = passport.authenticate(
	'local',
	{
		successRedirect: '/dashboard',
		failureRedirect: '/auth/login'
	}
);

// Protects all routes of the dashboard
const authorize = (req, res, next) => {
	if(!req.user) return res.redirect('./auth/login');

	next();
};

// Only to Protect Sign Up on the Dashboard
const authorizeSuperUser = (req, res, next) => {
	if(!req.user || req.user.IS_SA !== 1) return res.redirect('./login');

	next();
};

const logout = (req, res) => {
	req.logout();
	res.redirect('/');
};
 
module.exports = {
	showSignup,
	showLogin,
	createUser,
	authenticateUser,
	logout,
	authorize,
	authorizeSuperUser
};