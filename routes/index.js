const express = require('express');
const router = express.Router();
const { authorize } = require('../controllers/auth-controller');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Wild Code School', user: req.user });
})

router.get('/dashboard', (req, res, next) => {
  res.render('dashboard', { user: req.user });
})

module.exports = router;
