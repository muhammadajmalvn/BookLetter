const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/Admin/loginController')
const userController = require('../../controllers/Admin/userController');
const bookController = require('../../controllers/Admin/bookController');
const protect = require('../../utils/verifyToken')
const upload = require('../../utils/multer')

/* GET home page. */
router.post('/', loginController.adminLogin)

router.route('/users').get(userController.getUsers)
router.route('/manage-users').get(userController.blockUser)
router.route('/delete-user').get(userController.deleteUser)

router.route('/add-books').post(upload.array('images'), bookController.addBook)
router.route('/books').get(bookController.getAllBooks)
router.route('/delete-book').get(bookController.deleteBook)
router.route('/edit-book').get(upload.array('images'), bookController.editBook)

module.exports = router;
