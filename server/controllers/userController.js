const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
    let user = new User();
    let users = await user.findAll();
    
    res.send(users);
}

exports.createNewUser = async (req, res, next) => {
    
    let { usuario_primeiro_nome, usuario_sobrenome, usuario_email, usuario_senha, usuario_cpf, usuario_data_nascimento } = req.body;
    let user = new User(usuario_primeiro_nome, usuario_sobrenome, usuario_email, usuario_senha, usuario_cpf, usuario_data_nascimento);

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

    let { usuario_email, usuario_senha } = req.body;
    let user = new User(); 
    let logged = await user.login(usuario_email, usuario_senha);

    if (logged) {
        res.send(true);
    } else {
        res.send(false);
    }
}