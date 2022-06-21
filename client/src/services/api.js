import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const addUser = async (usuario_primeiro_nome, usuario_sobrenome, usuario_email, usuario_senha, usuario_cpf, usuario_data_nascimento) => {
    return api.post("/users", { usuario_primeiro_nome, usuario_sobrenome, usuario_email, usuario_senha, usuario_cpf, usuario_data_nascimento });
}

export const addCategory = async(categoria_nome) => {
    return api.post("/categories", {categoria_nome})
}

export const addEvent = async (evento_data, evento_hora, evento_local, evento_descricao_resumo, evento_duracao, evento_valor, evento_descricao, evento_tema, evento_patrocinado, evento_usuario_id, evento_categoria_id, evento_cidade, evento_titulo) => {
    return api.post("/events", { evento_data, evento_hora, evento_local, evento_descricao_resumo, evento_duracao, evento_valor, evento_descricao, evento_tema, evento_patrocinado, evento_usuario_id, evento_categoria_id, evento_cidade, evento_titulo });
}

export const listEvents = async() => {
    return api.get("/events", {});
}

export const login = async (usuario_email, usuario_senha) => {
    return api.post("/users/login", { usuario_email, usuario_senha })
}

export default api;