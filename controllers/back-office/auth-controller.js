const passport = require('passport');
const User = require('../../models/back-office/User');


const showUsers = (req, res) => {
	User.get((err, results) => {
		if (err) {
			//  If an error has occurred, then the user is informed of the error
			res.status(500).json({ message: 'Error getting all the users' });
		} else {
			//console.log('We got the users succefully');
			
			let users = results;
			//console.log(users);
			res.render('back-office/usersManagement', {user: req.user, users });
		}
	});
};
const deleteUser = (req, res) => {
	//console.log(req.params);
	User.delete(req.params, (err) => {
		if (err) return res.render('error', { err });
 
		res.redirect('/dashboard');
	});
};

const showSignup = (req, res) => {
	res.render('back-office/signup');
};

const showLogin = (req, res) => {
	res.render('back-office/login');
};

const createUser = (req, res) => {
	User.create(req.body, (err) => {
		if (err) return res.render('error', { err });
 
		res.redirect('/dashboard');
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
	console.log('authorize');
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
	showUsers,
	deleteUser,
	showSignup,
	showLogin,
	createUser,
	authenticateUser,
	logout,
	authorize,
	authorizeSuperUser
};