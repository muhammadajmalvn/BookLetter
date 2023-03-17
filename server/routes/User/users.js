const express = require('express');
const router = express.Router();
const userSignupLogin = require('../../controllers/Users/signup-login')


router.post('/user-signup',userSignupLogin.signupPost)

router.post('/user-login',userSignupLogin.loginPost)

module.exports = router;
