const express = require('express');
const router = express.Router();
const userSignupLogin = require('../../controllers/Users/signup-login')
const { protect } = require('../../utils/verifyToken')
const userProfile = require('../../controllers/Users/userProfile')
const userBooks = require('../../controllers/Users/userBooks')

router.post('/user-signup', userSignupLogin.signupPost)
router.post('/user-login', userSignupLogin.loginPost)

router.route('/profile').get(protect, userProfile.viewProfile)
router.route('/profileImageUpdate').post(protect, userProfile.imageUpdate)

router.route('/books').get(userBooks.getAllBooks)
router.route('/genrebooks').post(userBooks.getGenreBooks)

module.exports = router;
