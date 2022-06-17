const Category = require("../models/Category");

exports.getAllCategories = async (req, res) => {
    let category = new Category();
    let categories = await category.findAll();
    
    res.send(categories);
}

exports.createNewCategory = async (req, res, next) => {
    
    let { categoria_nome } = req.body;
    let category = new Category(categoria_nome);
    category = await category.save();
    
    res.send(category);
}

exports.getCategoryById = async (req, res, next) => {
    let id = req.params.id;
    let category = new Category();
    category = await category.getCategoryById(id);

    res.send(user);
}

