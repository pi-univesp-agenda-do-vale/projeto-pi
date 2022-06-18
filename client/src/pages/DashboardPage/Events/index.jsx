import React, { useContext, useReducer, useState } from 'react';

import { AuthContext } from '../../../contexts/auth';

import { addEvent } from '../../../services/api';

const EventsPage = () => {
    

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

	const [evento_data, setData] = useState("");
	const [evento_hora, setHora] = useState("");
	const [evento_local, setLocal] = useState("");
	const [evento_descricao_resumo, setDescricaoResumo] = useState("");
	const [evento_duracao, setDuracao] = useState("");
	const [evento_valor, setValor] = useState("");
	const [evento_descricao, setDescricao] = useState("");
	const [evento_tema, setTema] = useState("");
	const [evento_patrocinado, setPatrocinado] = useState("");
	const [evento_usuario_id, setUsuarioId] = useState("");
	const [evento_categoria_id, setCategoriaId] = useState("");
    const [evento_cidade, setCidade] = useState("");
    const [evento_titulo, setTitulo] = useState("");
    

    const addEventFunc = (event) => {
        event.preventDefault();
        if (
            evento_data !== ""
            && evento_hora !== ""
            && evento_local !== ""
            && evento_descricao_resumo !== ""
            && evento_duracao !== ""
			&& evento_valor !== ""
			&& evento_descricao !== ""
			&& evento_tema !== ""
			&& evento_patrocinado !== ""
			&& evento_usuario_id !== ""
			&& evento_categoria_id !== ""
            && evento_cidade !== ""
            && evento_titulo !== ""
			// OUTRAS VALIDAÇÕES DEVEM SER FEITAS E VERIFICADAS SE NECESSÁRIAS
        ) {

            // INSERINDO NO BANCO DE DADOS VIA API
            if (addEvent(evento_data, evento_hora, evento_local, evento_descricao_resumo, evento_duracao, evento_valor, evento_descricao, evento_tema, evento_patrocinado, evento_usuario_id, evento_categoria_id, evento_cidade, evento_titulo)) {
                setData("");
				setHora("");
                setLocal("");
                setDescricaoResumo("");
                setDuracao("");
                setValor("");
				setDescricao("");
				setTema("");
				setPatrocinado("");
				setUsuarioId("");
				setCategoriaId("");
                setCidade("");
                setTitulo("");
				alert("Usuário cadastrado com sucesso!");

            } else {
                alert("Verifique os campos e tente novamente");
            }

            
        } else {
            alert("Verifique todos os campos e tente novamente");
        }
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={ handleLogout }>
                Sair
            </button>

            <h2>Adicionar evento</h2>

            <form
                onSubmit={addEventFunc}
            >
                <fieldset>
                    <label htmlFor='evento_titulo'>Título:</label>
                    <input
                        type='text'
                        name='evento_titulo'
                        id='evento_titulo'
                        className='evento_titulo'
                        value={evento_titulo}
                        onChange={(event) => setTitulo(event.target.value)}
						placeholder='Digite o título do evento'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='evento_data'>Data:</label>
                    <input
                        type='date'
                        name='evento_data'
                        id='evento_data'
                        className='evento_data'
                        value={evento_data}
                        onChange={(event) => setData(event.target.value)}
                    />
                    <label htmlFor='evento_hora'>Hora:</label>
                    <input
                        type='time'
                        name='evento_hora'
                        id='evento_hora'
                        className='evento_hora'
                        value={evento_hora}
                        onChange={(event) => setHora(event.target.value)}
                    />
                    <label htmlFor='evento_duracao'>Duração:</label>
                    <input
                        type='time'
                        name='evento_duracao'
                        id='evento_duracao'
                        className='evento_duracao'
                        value={evento_duracao}
                        onChange={(event) => setDuracao(event.target.value)}
						placeholder='Digite a duração do evento'
                    />
                </fieldset>
				<fieldset>
                    <label htmlFor='evento_local'>Local:</label>
                    <input
                        type='text'
                        name='evento_local'
                        id='evento_local'
                        className='evento_local'
                        value={evento_local}
                        onChange={(event) => setLocal(event.target.value)}
						placeholder='Digite o local do evento'
                    />
                    <label htmlFor='evento_cidade'>Cidade:</label>
                    <input
                        type='text'
                        name='evento_cidade'
                        id='evento_cidade'
                        className='evento_cidade'
                        value={evento_cidade}
                        onChange={(event) => setCidade(event.target.value)}
						placeholder='Digite a cidade do evento'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='evento_valor'>Valor:</label>
                    <input
                        type='text'
                        name='evento_valor'
                        id='evento_valor'
                        className='evento_valor'
                        value={evento_valor}
                        onChange={(event) => setValor(event.target.value)}
						placeholder='Digite o valor do evento'
                    />
                </fieldset>
                {/*Criar checkbox para se for gratuito*/}

                <fieldset>
                    <label htmlFor='evento_tema'>Tema:</label>
                    <input
                        type='text'
                        name='evento_tema'
                        id='evento_tema'
                        className='evento_tema'
                        value={evento_tema}
                        onChange={(event) => setTema(event.target.value)}
						placeholder='Digite o tema do evento'
                    />
                </fieldset>
				<fieldset>
                    <label htmlFor='evento_descricao_resumo'>Descrição Resumo:</label>
                    <textarea 
						name='evento_descricao_resumo'
						id='evento_descricao_resumo'
						className='evento_descricao_resumo'
						value={evento_descricao_resumo}
						onChange={(event) => setDescricaoResumo(event.target.value)}
						placeholder='Digite uma breve descrição sobre o evento'
						rows="2" cols="40">
					</textarea>    
                </fieldset>

				<fieldset>
                    <label htmlFor='evento_descricao'>Descrição:</label>
                    <textarea 
						name='evento_descricao'
						id='evento_descricao'
						className='evento_descricao'
						value={evento_descricao}
						onChange={(event) => setDescricao(event.target.value)}
						placeholder='Digite uma descrição sobre o evento'
						rows="7" cols="80">
					</textarea>
                </fieldset>
				<fieldset>

                    {/*
                    <label htmlFor='evento_patrocinado'>Evento Patrocinado: </label>
                    <input 
					type='radio'
					id='evento_patrocinado'
					name='evento_patrocinado'
					className='evento_patrocinado'
					value="Sim"

                    />
                    <label htmlFor="evento_patrocinado">Sim</label>
					<input 
					type='radio'
					id='evento_patrocinado'
					name='evento_patrocinado'
					className='evento_patrocinado'
					value="Não"
                    
                    />
					<label htmlFor="evento_patrocinado">Não</label>*/}


                    
                    <label htmlFor='evento_patrocinado'>Evento Patrocinado:</label>
                    <input
                        type='text'
                        maxLength='3'
                        name='evento_patrocinado'
                        id='evento_patrocinado'
                        className='evento_patrocinado'
                        value={evento_patrocinado}
                        onChange={(event) => setPatrocinado(event.target.value)}
                />
				</fieldset>
				
				{/*Preencher select com dados do db*/}
				<fieldset>
                    <label htmlFor='evento_categoria_id'>Categoria:</label>
                    <input
                        type='text'
                        name='evento_categoria_id'
                        id='evento_categoria_id'
                        className='evento_categoria_id'
                        value={evento_categoria_id}
                        onChange={(event) => setCategoriaId(event.target.value)}
                    />
                </fieldset>
				
				{/*Pegar usuario logado*/}
				<fieldset>
                    <label htmlFor='evento_usuario_id'>Usuário:</label>
                    <input
                        type='text'
                        name='evento_usuario_id'
                        id='evento_usuario_id'
                        className='evento_usuario_id'
                        value={evento_usuario_id}
                        onChange={(event) => setUsuarioId(event.target.value)}
						placeholder='Digite o local do evento'
                    />
                </fieldset>
                <fieldset>
                    <button type='submit'>Enviar</button>
                </fieldset>
            </form>
            
        </>
    );
}

export default EventsPage;