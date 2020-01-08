const express = require('express');
const router = express.Router();
const { authorize } = require('../controllers/auth-controller');
const { addReview } = require('../controllers/review-controller');

router.get('/', authorize, (req, res) => {
	res.render('dashboard', { user: req.user });
});

router.get('/review', authorize, (req, res) => {
	res.render('review', {user: req.user});
});

router.post('/review', addReview);

module.exports = router;