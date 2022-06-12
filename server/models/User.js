const db = require('../config/db');
const bcrypt = require('bcrypt');

class User{

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

        return newUser;

    }

    async hashPassword(password) {
        let hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }

    async getUserById(id) {
        let sql = "SELECT * FROM av_users WHERE user_id = ?";
        const [userFound, _] = await db.execute(sql, [id]);

        return userFound;
    }

    async findAll() {
        let sql = "SELECT * FROM av_users";
        const userList = await db.execute(sql);

        return userList;
    }

    async getUserByEmail(user_email) {
        let sql = "SELECT * FROM av_users WHERE user_email = ?";
        const [userFound, _] = await db.execute(sql, [user_email]);

        return userFound;
    }

    async login(user_email, user_password) {
        let tryLogin = await this.getUserByEmail(user_email);
        if (tryLogin.length > 0) {
            let logged = await bcrypt.compare(user_password, tryLogin[0].user_password);
            console.log(logged);
            if (logged) {
                return true;
            }
        }
        return false;
    }
}

module.exports = User;
