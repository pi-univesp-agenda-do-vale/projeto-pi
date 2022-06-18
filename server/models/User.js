const db = require('../config/db');
const bcrypt = require('bcrypt');

class User{

<<<<<<< HEAD
    constructor(user_name = "", user_surname = "", user_email = "", user_password = "") {
        this.user_name = user_name;
        this.user_surname = user_surname;
        this.user_email = user_email;
        this.user_password = user_password;
    }

    async save() {
        let sql = "INSERT INTO av_users(user_name, user_surname, user_email, user_password) VALUES(?, ?, ?, ?);";
        let cryptpass = await this.hashPassword(this.user_password);
        const [newUser, _] = await db.execute(sql, [this.user_name, this.user_surname, this.user_email, cryptpass]);
=======
    constructor(usuario_primeiro_nome = "", usuario_sobrenome = "", usuario_email = "", usuario_senha = "", usuario_cpf ="", usuario_data_nascimento = "",) {
        this.usuario_primeiro_nome = usuario_primeiro_nome;
        this.usuario_sobrenome = usuario_sobrenome;
        this.usuario_email = usuario_email;
        this.usuario_senha = usuario_senha;
        this.usuario_cpf = usuario_cpf;
        this.usuario_data_nascimento = usuario_data_nascimento;
    }

    async save() {
        let sql = "INSERT INTO usuario(usuario_primeiro_nome, usuario_sobrenome, usuario_email, usuario_senha, usuario_cpf, usuario_data_nascimento) VALUES(?, ?, ?, ?, ?, ?);";
        let cryptpass = await this.hashPassword(this.usuario_senha);
        const [newUser, _] = await db.execute(sql, [this.usuario_primeiro_nome, this.usuario_sobrenome, this.usuario_email, cryptpass, this.usuario_cpf, this.usuario_data_nascimento]);
>>>>>>> fa9817e8fc97398953f92494a5a0e32caa4324ca

        return newUser;

    }

    async hashPassword(password) {
        let hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    async getUserById(id) {
<<<<<<< HEAD
        let sql = "SELECT * FROM av_users WHERE user_id = ?";
=======
        let sql = "SELECT * FROM usuario WHERE usuario_id = ?";
>>>>>>> fa9817e8fc97398953f92494a5a0e32caa4324ca
        const [userFound, _] = await db.execute(sql, [id]);

        return userFound;
    }

    async findAll() {
<<<<<<< HEAD
        let sql = "SELECT * FROM av_users";
=======
        let sql = "SELECT * FROM usuario";
>>>>>>> fa9817e8fc97398953f92494a5a0e32caa4324ca
        const userList = await db.execute(sql);

        return userList;
    }

<<<<<<< HEAD
    async getUserByEmail(user_email) {
        let sql = "SELECT * FROM av_users WHERE user_email = ?";
        const [userFound, _] = await db.execute(sql, [user_email]);
=======
    async getUserByEmail(usuario_email) {
        let sql = "SELECT * FROM usuario WHERE usuario_email = ?";
        const [userFound, _] = await db.execute(sql, [usuario_email]);
>>>>>>> fa9817e8fc97398953f92494a5a0e32caa4324ca

        return userFound;
    }

<<<<<<< HEAD
    async login(user_email, user_password) {
        let tryLogin = await this.getUserByEmail(user_email);
        if (tryLogin.length > 0) {
            let logged = await bcrypt.compare(user_password, tryLogin[0].user_password);
=======
    async login(usuario_email, usuario_senha) {
        let tryLogin = await this.getUserByEmail(usuario_email);
        if (tryLogin.length > 0) {
            let logged = await bcrypt.compare(usuario_senha, tryLogin[0].usuario_senha);
>>>>>>> fa9817e8fc97398953f92494a5a0e32caa4324ca
            console.log(logged);
            if (logged) {
                return true;
            }
        }
        return false;
    }
}

module.exports = User;
