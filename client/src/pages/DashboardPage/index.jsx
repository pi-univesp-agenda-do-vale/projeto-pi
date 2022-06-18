import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

const DashboardPage = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    let user = JSON.parse(localStorage.getItem('user'));
        
    return (
        <>
            <h1>Olá, { user.usuario_primeiro_nome }</h1>
            <button onClick={ handleLogout }>
                Sair
            </button>

            <p>Cadastrar</p>
            <a href="/dashboard/users">Usuário</a><br/>
            <a href="/dashboard/categories">Categorias</a><br/>
            <a href="/dashboard/events">Eventos</a><br/>
            
            </>
            )


    
}

export default DashboardPage;