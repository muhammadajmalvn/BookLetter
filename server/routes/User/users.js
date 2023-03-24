const express = require('express');
const router = express.Router();
const userSignupLogin = require('../../controllers/Users/signup-login')
const { protect } = require('../../utils/verifyToken')
const userProfile = require('../../controllers/Users/userProfile')

router.post('/user-signup', userSignupLogin.signupPost)

router.post('/user-login', userSignupLogin.loginPost)

router.route('/profile').get(protect, userProfile.viewProfile)



module.exports = router;
