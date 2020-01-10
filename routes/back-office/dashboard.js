const express = require('express');
const router = express.Router();
const { authorize } = require('../../controllers/back-office/auth-controller');
const { getContactus, editContactus } = require('../../controllers/back-office/contactus-controller');
const { addReview, getReviews, editReview, getAddReviewPage, getEditReviewPage, deleteReview } = require('../../controllers/back-office/review-controller');
const { getClients, getNewClientPage, addNewClient, toggleClientisShowing, getEditClientPage, editClients, deleteClients } = require('../../controllers/back-office/clients-controller');



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


//Clients
// Get all clients
router.get('/clients', authorize, getClients);
// Get page 'add a client'
router.get('/clients/new', authorize, getNewClientPage);
// Add a client
router.post('/clients/new', authorize, addNewClient);

// Toggle isShowing by ID
router.post('/clients/:id/toggle', authorize, toggleClientisShowing);

// Get page 'add a client'
router.get('/clients/:id/edit', authorize, getEditClientPage);
// Edit client by ID
router.post('/clients/:id/edit', authorize, editClients);

// Delete client by ID
router.post('/clients/:id/delete', authorize, deleteClients);

module.exports = router;