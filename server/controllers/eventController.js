const Event = require("../models/Event");

exports.getAllEvents = async (req, res) => {
    let event = new Event();
    let events = await event.findAll();
    
    res.send(events);
}

exports.createNewEvent = async (req, res, next) => {
    
    let { evento_data, evento_hora, evento_local, evento_descricao_resumo, evento_duracao, evento_valor, evento_descricao, evento_tema, evento_patrocinado, evento_usuario_id, evento_categoria_id, evento_cidade, evento_titulo, evento_imagem } = req.body;
    let event = new Event(evento_data, evento_hora, evento_local, evento_descricao_resumo, evento_duracao, evento_valor, evento_descricao, evento_tema, evento_patrocinado, evento_usuario_id, evento_categoria_id, evento_cidade, evento_titulo, evento_imagem);
    event = await event.save();
    
    res.send(event);
}

exports.getEventById = async (req, res, next) => {
    let id = req.params.id;
    let event = new Event();
    event = await event.getEventById(id);

    res.send(event);
}
