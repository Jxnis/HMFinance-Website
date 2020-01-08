const express = require('express');
const router = express.Router();
const { authorize } = require('../../controllers/back-office/auth-controller');
const { addReview } = require('../../controllers/back-office/review-controller');
const { getContactus } = require('../../controllers/back-office/contactus-controller');


router.get('/', authorize, (req, res) => {
	res.render('back-office/dashboard', { user: req.user });
});

//Review
router.get('/review', authorize, (req, res) => {
	res.render('back-office/review', {user: req.user});
});
router.post('/review', addReview);

//ContactUs
router.get('/contactus', authorize, getContactus);

module.exports = router;