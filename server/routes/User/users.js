const express = require('express');
const router = express.Router();
const userSignupLogin = require('../../controllers/Users/signup-login')
const { protect } = require('../../utils/verifyToken')
const userProfile = require('../../controllers/Users/userProfile')
const userBooks = require('../../controllers/Users/userBooks')
const userBooking = require('../../controllers/Users/userBooking')
const userOrders = require('../../controllers/Users/userOrders')

router.post('/user-signup', userSignupLogin.signupPost)
router.post('/user-login', userSignupLogin.loginPost)
router.post('/otp-login', userSignupLogin.otpLoginPost)

router.route('/profile').get(protect, userProfile.viewProfile)
router.route('/profileImageUpdate').post(protect, userProfile.imageUpdate)

router.route('/books').get(userBooks.getAllBooks)
router.route('/genrebooks').post(userBooks.getGenreBooks)
router.route('/search-book').post(userBooks.searchBook)

router.route('/booking-book').post(userBooking.booking)
router.route('/orders').get(protect,userOrders.getOrders)

module.exports = router;
