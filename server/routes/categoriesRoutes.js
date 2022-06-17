const express = require('express');

const categoryController = require("../controllers/categoryController");

const router = express.Router();

router.route("/").get(categoryController.getAllCategories).post(categoryController.createNewCategory);

router.route('/:id').get(categoryController.getCategoryById);


module.exports = router;