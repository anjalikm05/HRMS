const express = require('express');
const router = express.Router();

const { userControllerServices } = require('../controllers/userController');

router.post('/register', userControllerServices.register);
router.post('/login', userControllerServices.login)

module.exports = router