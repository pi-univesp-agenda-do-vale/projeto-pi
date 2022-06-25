require('dotenv').config();

const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "us-cdbr-east-05.cleardb.net",
    user: "b961350c47d8eb",
    database: "heroku_16b5b8acec04886",
    password: "39e8a225",
});

module.exports = pool.promise();