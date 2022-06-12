const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    let user = new User();
    let users = await user.findAll();
    
    res.send(users);
}

exports.createNewUser = async (req, res, next) => {
    
    let { user_name, user_surname, user_email, user_password } = req.body;
    let user = new User(user_name, user_surname, user_email, user_password);
    user = await user.save();
    
    res.send(user);
}

exports.getUserById = async (req, res, next) => {
    let id = req.params.id;
    let user = new User();
    user = await user.getUserById(id);

    res.send(user);
}

exports.login = async (req, res, next) => {
    let { user_email, user_password } = req.body;
    let user = new User(); 
    let logged = await user.login(user_email, user_password);
    if (logged) {
        res.send(true);
    } else {
        res.send(false);
    }
}