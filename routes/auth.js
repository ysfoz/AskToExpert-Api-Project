const express = require('express');
const router = express.Router();
const { getAccessToRoute } = require('../middleware/authorization/auth')
const { register, getUser , login, logout, imageUpload} = require('../controllers/auth')
const profileImageUpload = require('../middleware/libraries/profileImageUpload')





router.post('/register',register)
router.post('/login',login)
router.get('/logout',getAccessToRoute,logout)
router.get('/profile',getAccessToRoute,getUser)
router.post('/upload',[getAccessToRoute,profileImageUpload.single('profile_image')],imageUpload)


module.exports = router;
