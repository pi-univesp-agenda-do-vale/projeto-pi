import React, { useContext, useState } from 'react';
import { useEffect } from 'react';

import { AuthContext } from '../../../contexts/auth';

import { addEvent, listCategories } from '../../../services/api';

const EventsPage = () => {

    const [checked, setChecked] = useState(true);

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => { 
            const response = await listCategories();
            setCategories(response.data[0]);
            setLoading(false)
        })();
    }, []);


    const handleRadioBtn = e =>{
        setPatrocinado(e.target.value);
    }

    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }

    let user = JSON.parse(localStorage.getItem('user'));

	const [evento_data, setData] = useState("");
	const [evento_hora, setHora] = useState("");
	const [evento_local, setLocal] = useState("");
	const [evento_descricao_resumo, setDescricaoResumo] = useState("");
	const [evento_duracao, setDuracao] = useState("");
	const [evento_valor, setValor] = useState("");
	const [evento_descricao, setDescricao] = useState("");
	const [evento_tema, setTema] = useState("");
	const [evento_patrocinado, setPatrocinado] = useState("");
	const evento_usuario_id = user.usuario_id;
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
                setCidade("");
                setTitulo("");
                setCategoriaId("");
                //Verificar porque não está setando o select para primeira opção
				alert("Evento cadastrado com sucesso!");

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
                    <label htmlFor='evento_titulo'>Título: </label>
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
                    <label htmlFor='evento_data'>Data: </label>
                    <input
                        type='date'
                        name='evento_data'
                        id='evento_data'
                        className='evento_data'
                        value={evento_data}
                        onChange={(event) => setData(event.target.value)}
                    />
                    <label htmlFor='evento_hora'>Hora: </label>
                    <input
                        type='time'
                        name='evento_hora'
                        id='evento_hora'
                        className='evento_hora'
                        value={evento_hora}
                        onChange={(event) => setHora(event.target.value)}
                    />
                    <label htmlFor='evento_duracao'>Duração: </label>
                    <input
                        type='time'
                        name='evento_duracao'
                        id='evento_duracao'
                        className='evento_duracao'
                        value={evento_duracao}
                        onChange={(event) => setDuracao(event.target.value)}
                    />
                </fieldset>
				<fieldset>
                    <label htmlFor='evento_local'>Local: </label>
                    <input
                        type='text'
                        name='evento_local'
                        id='evento_local'
                        className='evento_local'
                        value={evento_local}
                        onChange={(event) => setLocal(event.target.value)}
						placeholder='Digite o local do evento'
                    />
                    <label htmlFor='evento_cidade'>Cidade: </label>
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
                    <label htmlFor='evento_valor'>Valor: </label>
                    <input
                        type='text'
                        name='evento_valor'
                        id='evento_valor'
                        className='evento_valor'
                        value={evento_valor}
                        onChange={(event) => setValor(event.target.value)}
						placeholder='Digite o valor do evento'
                        disabled={!checked}
                    />
                    <label htmlFor='evento_valor'>
                    Evento Gratuito
                    <input
                        type='checkbox'
                        name='evento_valor'
                        id='evento_valor'
                        className='evento_valor'
                        checked={!checked}
                        onChange={() => {
                            if(checked){
                                setValor('Gratuito')
                            }
                            else {setValor('')}
                        setChecked(!checked)
                          }
                       }
                    />
                  </label>
                </fieldset>
                

                <fieldset>
                    <label htmlFor='evento_tema'>Tema: </label>
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
                    <label htmlFor='evento_descricao_resumo'>Descrição Resumo: </label>
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
                    <label htmlFor='evento_descricao'>Descrição: </label>
                    <textarea 
						name='evento_descricao'
						id='evento_descricao'
						className='evento_descricao'
						value={evento_descricao}
						onChange={(event) => setDescricao(event.target.value)}
						placeholder='Digite uma descrição completa sobre o evento'
						rows="7" cols="80">
					</textarea>
                </fieldset>
                <fieldset>
                    <label htmlFor='evento_patrocinado'>Evento Patrocinado: </label>
                    <input 
					type='radio'
					id='evento_patrocinado'
					name='evento_patrocinado'
					className='evento_patrocinado'
					value='Sim'
                    checked={evento_patrocinado === 'Sim' ? true : false}
                    onChange={handleRadioBtn}
                    />
                    <label htmlFor="evento_patrocinado">Sim </label>
					<input 
					type='radio'
					id='evento_patrocinado'
					name='evento_patrocinado'
					className='evento_patrocinado'
					value='Não'
                    checked={evento_patrocinado === 'Não' ? true : false}
                    onChange={handleRadioBtn}
                    />
					<label htmlFor="evento_patrocinado">Não </label>             
				</fieldset>
                <fieldset>
                    <label htmlFor='evento_categoria_id'>Categoria: </label>
                    <select
                        name='evento_categoria_id'
                        id='evento_categoria_id'
                        className='evento_categoria_id'
                        onChange={(event) => setCategoriaId(event.target.value)}>
                            <option value="" disabled></option>
                            {categories.map((category, index) => (
                                <option key={index} value={category.categoria_id}> { category.categoria_nome } </option>
                            ))
                            }
                    </select>
                </fieldset>
                <fieldset>
                    <button type='submit'>Adicionar</button>
                </fieldset>
            </form>

            
        </>
    );
}

export default EventsPage;