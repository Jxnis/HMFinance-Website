const express = require('express');
const router = express.Router();
const { authorize } = require('../../controllers/back-office/auth-controller');
const { addReview, getReviews, editReview, getAddReviewPage, getEditReviewPage, deleteReview } = require('../../controllers/back-office/review-controller');
const { getContactus } = require('../../controllers/back-office/contactus-controller');
const { getSimulatorPage, editSimulator } = require('../../controllers/back-office/simulators-controller');

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

// Render simulators page backoffice
router.get('/simulators', authorize, getSimulatorPage);

// Render SS simulator page backoffice
// router.get('/simulators/SS', authorize, renderSSSimulator);

// Add a review
router.post('/reviews', authorize, addReview);

// Edit a review
router.post('/reviews/edit', authorize, editReview);

// Delete a review
router.post('/reviews/:id/delete', authorize, deleteReview);

// Edit SS Simulator values backoffice
router.post('/simulators', authorize, editSimulator);


//ContactUs
router.get('/contactus', authorize, getContactus);

module.exports = router;