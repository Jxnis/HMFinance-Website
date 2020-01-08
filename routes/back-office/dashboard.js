const express = require('express');
const router = express.Router();
const { authorize } = require('../../controllers/back-office/auth-controller');
const { addReview } = require('../../controllers/back-office/review-controller');

router.get('/', authorize, (req, res) => {
	res.render('back-office/dashboard', { user: req.user });
});

router.get('/review', authorize, (req, res) => {
	res.render('back-office/review', {user: req.user});
});

router.post('/review', addReview);

module.exports = router;