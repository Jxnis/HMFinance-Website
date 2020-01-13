const express = require('express');
const {
	showUsers,
	deleteUser,
	showSignup,
	showLogin,
	createUser,
	authenticateUser,
	logout,
	authorizeSuperUser
} = require('../../controllers/back-office/auth-controller');

const router = express.Router();

router.get('/', authorizeSuperUser, showUsers);
router.post('/:id/delete', authorizeSuperUser, deleteUser);
router.get('/signup', authorizeSuperUser, showSignup);
router.post('/signup', authorizeSuperUser, createUser);

router.get('/login', showLogin);
router.post('/login', authenticateUser);

router.get('/logout', logout);

module.exports = router;
