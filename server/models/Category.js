const db = require('../config/db');

class Category{

    constructor(categoria_nome = "") {
        this.categoria_nome = categoria_nome;
               
    }
    async save() {
        let sql = "INSERT INTO categoria(categoria_nome) VALUES(?);";
        const [newCategory, _] = await db.execute(sql, [this.categoria_nome]);

        return newCategory;

    }

    async getCategoryById(id) {
        let sql = "SELECT * FROM categoria WHERE categoria_id = ?";
        const [categoryFound, _] = await db.execute(sql, [id]);

        return categoryFound;
    }

    async findAll() {
        let sql = "SELECT * FROM categoria";
        const categoryList = await db.execute(sql);

        return categoryList;
    }
}

module.exports = Category;