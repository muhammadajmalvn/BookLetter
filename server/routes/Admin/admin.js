const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/Admin/loginController')
const userController = require('../../controllers/Admin/userController');
const bookController = require('../../controllers/Admin/bookController');
const genreController = require('../../controllers/Admin/genreController');
const { protect } = require('../../utils/verifyToken')
const upload = require('../../utils/multer')

/* GET home page. */
router.post('/', loginController.adminLogin)

router.route('/users').get(protect,userController.getUsers)
router.route('/manage-users').get(userController.blockUser)
router.route('/delete-user').get(userController.deleteUser)
router.route('/search').post(userController.searchUser)

router.route('/add-books').post(upload.array('images'), protect, bookController.addBook)
router.route('/books').get(bookController.getAllBooks)
router.route('/delete-book').get(protect, bookController.deleteBook)
router.route('/edit-book').post(upload.array('images'), protect, bookController.editBook)

router.route('/add-genre').post(protect,genreController.addgenre)
router.route('/genres').get(protect,genreController.getAllGenres)
router.route('/delete-genre').get(protect,genreController.deleteGenre)


module.exports = router;
