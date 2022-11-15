const db = require('../config/db');

class Event{

    constructor(evento_data = "", evento_hora = "", evento_local = "", evento_descricao_resumo = "", evento_duracao = "", evento_valor = "", evento_descricao = "", evento_tema = "", evento_patrocinado = "", evento_usuario_id, evento_categoria_id = "", evento_cidade = "", evento_titulo = "", evento_imagem = ""){
        this.evento_data = evento_data;
		this.evento_hora = evento_hora;
		this.evento_local = evento_local;
		this.evento_descricao_resumo = evento_descricao_resumo;
		this.evento_duracao = evento_duracao;
		this.evento_valor = evento_valor;
		this.evento_descricao = evento_descricao;
		this.evento_tema = evento_tema;
		this.evento_patrocinado = evento_patrocinado;
		this.evento_usuario_id = evento_usuario_id;
		this.evento_categoria_id = evento_categoria_id;
        this.evento_cidade = evento_cidade;
        this.evento_titulo = evento_titulo;
        this.evento_imagem = evento_imagem;
    }

    async save() {
        let sql = "INSERT INTO evento(evento_data, evento_hora, evento_local, evento_descricao_resumo, evento_duracao, evento_valor, evento_descricao, evento_tema, evento_patrocinado, evento_usuario_id, evento_categoria_id, evento_cidade, evento_titulo, evento_imagem) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const [newEvent, _] = await db.execute(sql, [this.evento_data, this.evento_hora, this.evento_local, this.evento_descricao_resumo, this.evento_duracao, this.evento_valor, this.evento_descricao, this.evento_tema, this.evento_patrocinado, this.evento_usuario_id, this.evento_categoria_id, this.evento_cidade, this.evento_titulo, this.evento_imagem]);

        return newEvent;

    }

    async getEventById(id) {
        let sql = "SELECT * FROM evento WHERE evento_id = ?";
        const [eventFound, _] = await db.execute(sql, [id]);

        return eventFound;
    }

    async findAll() {
        let sql = "SELECT * FROM evento";
        const eventList = await db.execute(sql);

        return eventList;
    }
	
	//Testar essa query
	async findOrderByDate() {
        let sql = "SELECT * FROM evento WHERE evento_data >= CURRENT_DATE() ORDER BY evento_data";
        const eventList = await db.execute(sql);

        return eventList;
    }

}

module.exports = Event;