const express = require('express');
const router = express.Router();
const { errorTest } = require('../controllers/auth')


const { register } = require('../controllers/auth')

router.post('/register',register)
router.get('/error',errorTest)

module.exports = router;
