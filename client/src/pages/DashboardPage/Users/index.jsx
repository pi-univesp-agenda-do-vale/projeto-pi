import React, { useContext, useState } from 'react';

import { AuthContext } from '../../../contexts/auth';

import { addUser } from '../../../services/api';

const UsersPage = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    const [usuario_email, setEmail] = useState("");
    const [usuario_senha, setPassword] = useState("");
    const [usuario_primeiro_nome, setName] = useState("");
    const [usuario_cpf, setCPF] = useState("");
    const [usuario_data_nascimento, setNascimento] = useState("");

    

    const addUserFunc = (event) => {
        event.preventDefault();
        if (
            usuario_cpf !== ""
            && usuario_data_nascimento !== ""
            && usuario_email !== ""
            && usuario_senha !== ""
            && usuario_primeiro_nome !== ""
            // OUTRAS VALIDAÇÕES DEVEM SER FEITAS
        ) {
            
            // TRATAMENTO DO NOME 
            let nomecompleto = usuario_primeiro_nome.split(" ");
            let nome = nomecompleto[0];
            let sobrenome = "";
            for (let i = 1; i < nomecompleto.length; i++){
                sobrenome = sobrenome + nomecompleto[i] + " ";
            }

            // INSERINDO NO BANCO DE DADOS VIA API
            if (addUser(nome, sobrenome, usuario_email, usuario_senha, usuario_cpf, usuario_data_nascimento)) {
                setEmail("");
                setPassword("");
                setName("");
                setCPF("");
                setNascimento("");
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

            <h2>Adicionar usuário</h2>

            <form
                onSubmit={addUserFunc}
            >
                <fieldset>
                    <label htmlFor='usuario_primeiro_nome'>Nome: </label>
                    <input
                        type='text'
                        name='usuario_primeiro_nome'
                        id='usuario_primeiro_nome'
                        className='usuario_primeiro_nome'
                        value={usuario_primeiro_nome}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Digite o nome completo aqui'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='usuario_email'>E-mail: </label>
                    <input
                        type='email'
                        name='usuario_email'
                        id='usuario_email'
                        className='usuario_email'
                        value={usuario_email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Digite o e-mail aqui'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='usuario_senha'>Senha: </label>
                    <input
                        type='password'
                        name='usuario_senha'
                        id='usuario_senha'
                        className='usuario_senha'
                        value={usuario_senha}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Digite uma senha válida'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='usuario_cpf'>CPF: </label>
                    <input
                        type='text'
                        name='usuario_cpf'
                        id='usuario_cpf'
                        className='usuario_cpf'
                        value={usuario_cpf}
                        onChange={(event) => setCPF(event.target.value)}
                        placeholder='Digite o CPF'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='usuario_data_nascimento'>Data de Nascimento: </label>
                    <input
                        type='date'
                        name='usuario_data_nascimento'
                        id='usuario_data_nascimento'
                        className='usuario_data_nascimento'
                        value={usuario_data_nascimento}
                        onChange={(event) => setNascimento(event.target.value)}
                    />
                </fieldset>
                <fieldset>
                    <button type='submit'>Enviar</button>
                </fieldset>
            </form>
            
        </>
    );
}

export default UsersPage;