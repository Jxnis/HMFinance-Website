const express = require('express');
const router = express.Router();
const { authorize } = require('../../controllers/back-office/auth-controller');
const { getContactus, editContactus } = require('../../controllers/back-office/contactus-controller');
const { addReview, getReviews, editReview, getAddReviewPage, getEditReviewPage, deleteReview } = require('../../controllers/back-office/review-controller');
const { getClients, getNewClientPage, addNewClient, toggleClientisShowing, getEditClientPage, editClients, deleteClients } = require('../../controllers/back-office/clients-controller');
const { getSegSocialSimulatorPage, editSegSocialSimulator, getAllSimulatorsPage, getMaisValiasSimulatorPage, getIMTSimulatorsPage, editIMTSimulatorsPage } = require('../../controllers/back-office/simulators-controller');
const { getHomepage, editHomepage } = require('../../controllers/back-office/homepage-controller');


//Dashboard
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
router.post('/reviews/:id/edit', authorize, editReview);
// Delete a review
router.post('/reviews/:id/delete', authorize, deleteReview);


//Simulators
// Render SS simulator page backoffice
// router.get('/simulators/SS', authorize, renderSSSimulator);

// Render simulators page backoffice
router.get('/simulators', authorize, getAllSimulatorsPage);

// Render simulator Seg Social
router.get('/simulators/segsocial', authorize, getSegSocialSimulatorPage);
// Edit SS simulator values backoffice
router.post('/simulators/segsocial', authorize, editSegSocialSimulator);

// Render simulator Mais Valias
router.get('/simulators/maisvalias', authorize, getMaisValiasSimulatorPage);

// Render simulator IMT
router.get('/simulators/imt', authorize, getIMTSimulatorsPage);
// Edit SS simulator values backoffice
router.post('/simulators/imt/edit', authorize, editIMTSimulatorsPage);


//ContactUs
// Get all Contacts
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


//Homepage
// Get page 'add a client'
router.get('/homepage', authorize, getHomepage);
// Add a client
router.post('/homepage', authorize, editHomepage);

module.exports = router;