const db = require('../config/db');

class User{

    constructor(user_name, user_surname, user_password) {
        this.user_name = user_name;
        this.user_surname = user_surname;
        this.user_password = user_password;
    }

    async save() {
        let sql = "INSERT INTO av_users(user_name, user_surname, user_password) VALUES(?, ?, ?);";
        const [newUser, _] = await db.execute(sql, [this.user_name, this.user_surname, this.user_password]);

        return newUser;

    }

    static findAll() {
        
    }
}

module.exports = User;