const express = require('express');
const {
	showSignup,
	showLogin,
	createUser,
	authenticateUser,
	logout
} = require('../controllers/auth-controller');

const router = express.Router();

router.get('/signup', showSignup);
router.post('/signup', createUser);

router.get('/login', showLogin);
router.post('/login', authenticateUser);

router.get('/logout', logout);

module.exports = router;
