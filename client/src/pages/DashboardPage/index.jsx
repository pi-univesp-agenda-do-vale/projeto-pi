import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/auth';

import { addUser } from '../../services/api';

const DashboardPage = () => {

    const { logout } = useContext(AuthContext);

    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [user_name, setName] = useState("");

    const handleLogout = () => {
        logout();
    }

    const addUserFunc = (event) => {
        event.preventDefault();
        if (
            user_email !== ""
            && user_password !== ""
            && user_name !== ""
            // OUTRAS VALIDAÇÕES DEVEM SER FEITAS
        ) {
            
            // TRATAMENTO DO NOME 
            let nomecompleto = user_name.split(" ");
            let nome = nomecompleto[0];
            let sobrenome = "";
            for (let i = 1; i < nomecompleto.length; i++){
                sobrenome = sobrenome + nomecompleto[i] + " ";
            }

            // INSERINDO NO BANCO DE DADOS VIA API
            
            if (addUser(nome, sobrenome, user_email, user_password)) {
                alert("Usuário cadastrado com sucesso!");
                setEmail("");
                setPassword("");
                setName("");

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
                    <label htmlFor='user_name'>Nome:</label>
                    <input
                        type='text'
                        name='user_name'
                        id='user_name'
                        className='user_name'
                        value={user_name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder='Digite o nome completo aqui'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='user_email'>E-mail:</label>
                    <input
                        type='email'
                        name='user_email'
                        id='user_email'
                        className='user_email'
                        value={user_email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Digite o e-mail aqui'
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor='user_password'>Senha:</label>
                    <input
                        type='password'
                        name='user_password'
                        id='user_password'
                        className='user_password'
                        value={user_password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Digite uma senha válida'
                    />
                </fieldset>
                <fieldset>
                    <button type='submit'>Enviar</button>
                </fieldset>
            </form>
            
        </>
    );
}

export default DashboardPage;