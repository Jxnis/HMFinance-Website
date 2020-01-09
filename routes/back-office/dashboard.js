const express = require('express');
const router = express.Router();
const { authorize } = require('../../controllers/back-office/auth-controller');
const { getContactus, editContactus } = require('../../controllers/back-office/contactus-controller');
const { addReview, getReviews, editReview, getAddReviewPage, getEditReviewPage, deleteReview } = require('../../controllers/back-office/review-controller');




router.get('/', authorize, (req, res) => {
	res.render('back-office/dashboard', { user: req.user });
});

//Review
// Render review page backoffice
router.get('/reviews', authorize, getReviews);

// Render add review page backoffice
router.get('/reviews/new', authorize, getAddReviewPage);

// Render edit review page backoffice
router.get('/reviews/:id/edit', authorize, getEditReviewPage);

// Add a review
router.post('/reviews', authorize, addReview);

// Edit a review
router.post('/reviews/edit', authorize, editReview);

// Delete a review
router.post('/reviews/:id/delete', authorize, deleteReview);


//ContactUs
router.get('/contactus', authorize, getContactus);

// Edit Contacts
router.post('/contactus', authorize, editContactus);

module.exports = router;