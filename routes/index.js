const express = require('express');
const router = express.Router();
const {getBrowserLang, getAllInfo} = require('../controllers/homepage-controller-front');
const {getSimulatorInfo} = require('../controllers/simulators-controller-front');

/* GET home page. */
router.get('/', getBrowserLang, getAllInfo);


/* Render the simulator page */
router.get('/simulators', getSimulatorInfo);


//
router.post('/signupmail', function (req, res) {
	// save user details to your database.
	res.send('Signed Up!');
});

module.exports = router;
