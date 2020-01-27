const express = require('express');
const router = express.Router();
const { getAllInfo} = require('../controllers/homepage-controller-front');
const {getSimulatorInfo, getMaisValiasInfo, getimtInfo} = require('../controllers/simulators-controller-front');
const {getBrowserLang, setCookie} = require('../controllers/language-controller-front');
const {renderTestPage} = require('../controllers/test-controller');
const { getServices} = require('../controllers/services-controller-front');


/* GET home page. */
router.get('/', getBrowserLang, getAllInfo);
/* Save language as a cookie */
router.get('/setlanguage/:language', setCookie);

/* Render the simulator page */
router.get('/simulators', getSimulatorInfo, getMaisValiasInfo, getimtInfo);

/* Render the services Page */
router.get('/services', getBrowserLang, getServices);


router.get('/test', renderTestPage);


module.exports = router;
