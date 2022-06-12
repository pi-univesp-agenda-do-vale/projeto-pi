const express = require('express');

const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").get(userController.getAllUsers).post(userController.createNewUser);

router.route('/:id').get(userController.getUserById);

router.route('/login').post(userController.login);

module.exports = router;