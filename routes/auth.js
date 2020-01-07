const express = require('express');
const {
	showSignup,
	showLogin,
	createUser,
	authenticateUser,
	logout,
	authorizeSuperUser
} = require('../controllers/auth-controller');

const router = express.Router();

router.get('/signup', authorizeSuperUser, showSignup);
router.post('/signup', authorizeSuperUser, createUser);

router.get('/login', showLogin);
router.post('/login', authenticateUser);

router.get('/logout', logout);

module.exports = router;
