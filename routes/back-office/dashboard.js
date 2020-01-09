const express = require('express');
const router = express.Router();
const { authorize } = require('../../controllers/back-office/auth-controller');
const { addReview, getReviews, editReview } = require('../../controllers/back-office/review-controller');
const { getContactus } = require('../../controllers/back-office/contactus-controller');


router.get('/', authorize, (req, res) => {
	res.render('back-office/dashboard', { user: req.user });
});

//Review
// Render review page backoffice
router.get('/review', authorize, getReviews);

// Add a review
router.post('/review', authorize, addReview);

// Edit a review
router.post('/review/edit', authorize, editReview);

//ContactUs
router.get('/contactus', authorize, getContactus);

module.exports = router;