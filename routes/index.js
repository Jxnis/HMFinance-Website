const express = require('express');
const router = express.Router();
const {getAllInfo} = require('../controllers/homepage-controller-front');
const {getSimulatorInfo} = require('../controllers/simulators-controller-front');

/* GET home page. */
router.get('/', getAllInfo);

/* Render the simulator page */
router.get('/simulators', getSimulatorInfo);

module.exports = router;
