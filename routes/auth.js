const express = require('express');
const router = express.Router();
const { getAccessToRoute } = require('../middleware/authorization/auth')
const { register, getUser , login} = require('../controllers/auth')





router.post('/register',register)
router.post('/login',login)
router.get('/profile',getAccessToRoute,getUser)


module.exports = router;
