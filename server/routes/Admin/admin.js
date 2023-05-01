const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/Admin/loginController')
const userController = require('../../controllers/Admin/userController');
const bookController = require('../../controllers/Admin/bookController');
const genreController = require('../../controllers/Admin/genreController');
const ordersController = require('../../controllers/Admin/ordersController');
const { protect } = require('../../Middlewares/verifyToken')
const upload = require('../../utils/multer')

/* GET home page. */
router.post('/', loginController.adminLogin)

/* GET home page. */
router.route('/users')
    .get(protect, userController.getUsers)
    .delete(protect, userController.deleteUser)
    .post(protect, userController.searchUser)
router.route('/manage-users').get(userController.blockUnblockUser)

router.route('/books')
    .get(protect, bookController.getAllBooks)
    .delete(protect, bookController.deleteBook)

router.route('/add-books').post(upload.array('images'), protect, bookController.addBook)
router.route('/edit-book').post(upload.array('images'), protect, bookController.editBook)

router.route('/genres')
    .get(protect, genreController.getAllGenres)
    .post(protect, genreController.addGenre)
router.route('/delete-genre').get(protect, genreController.deleteGenre)

router.route('/orders').get(protect, ordersController.getAllOrders)
router.route('/order-status').post(protect, ordersController.changeOrderStatus)

router.route('/returns')
.get(protect, ordersController.getReturns)
.put(protect, ordersController.acceptReturns)

module.exports = router;
