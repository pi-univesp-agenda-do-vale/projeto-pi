const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    res.send("getAllUsers route");
}

exports.createNewUser = async (req, res, next) => {
    
    let { user_name, user_surname, user_password } = req.body;
    let user = new User(user_name, user_surname, user_password);
    user = await user.save();
    
    res.send(user);
}

exports.getUserById = async (req, res, next) => {
    res.send("getUserById route");
}