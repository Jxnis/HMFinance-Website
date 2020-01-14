const express = require('express');
const router = express.Router();
const {getAllInfo} = require('../controllers/homepage-controller-front');

/* GET home page. */
router.get('/', getAllInfo);

module.exports = router;
