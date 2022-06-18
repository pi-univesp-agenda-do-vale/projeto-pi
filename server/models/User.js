const db = require('../config/db');
const bcrypt = require('bcrypt');

class User{

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

        return newUser;

    }

    async hashPassword(password) {
        let hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    async getUserById(id) {
        let sql = "SELECT * FROM usuario WHERE usuario_id = ?";
        const [userFound, _] = await db.execute(sql, [id]);

        return userFound;
    }

    async findAll() {
        let sql = "SELECT * FROM usuario";
        const userList = await db.execute(sql);

        return userList;
    }

    async getUserByEmail(usuario_email) {
        let sql = "SELECT * FROM usuario WHERE usuario_email = ?";
        const [userFound, _] = await db.execute(sql, [usuario_email]);

        return userFound;
    }

    async login(usuario_email, usuario_senha) {
        let response = {
            "is_logged": false,
            "userData": {},
        }
        let tryLogin = await this.getUserByEmail(usuario_email);
        if (tryLogin.length > 0) {
            tryLogin = tryLogin[0];
            let logged = await bcrypt.compare(usuario_senha, tryLogin.usuario_senha);

            if (logged) {
                let userData = {
                    usuario_primeiro_nome: tryLogin.usuario_primeiro_nome,
                    usuario_sobrenome: tryLogin.usuario_sobrenome,
                    usuario_email: tryLogin.usuario_email,
                };
                response.is_logged = true;
                response.userData = userData;
            }
        }
        return response;
    }
}

module.exports = User;
