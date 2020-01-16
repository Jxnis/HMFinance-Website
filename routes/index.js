const express = require('express');
const router = express.Router();
const { getAllInfo} = require('../controllers/homepage-controller-front');
const {getSimulatorInfo} = require('../controllers/simulators-controller-front');
const {getBrowserLang, setCookie} = require('../controllers/language-controller-front');

/* GET home page. */
router.get('/', getBrowserLang, getAllInfo);
router.post('/setlanguage', setCookie);

/* Render the simulator page */
router.get('/simulators', getSimulatorInfo);

module.exports = router;
