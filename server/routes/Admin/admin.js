const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/Admin/loginController')
const userController = require('../../controllers/Admin/userController');
const protect = require('../../utils/verifyToken')
/* GET home page. */
router.post('/', loginController.adminLogin)

router.route('/users').get(userController.getUsers)
router.get('/manage-users').get(protect,userController.blockUser)

module.exports = router;
