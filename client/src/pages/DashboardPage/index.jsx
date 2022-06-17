import React, { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/auth';


const DashboardPage = () => {

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }
    
    return (
        <>
            <h1>Dashboard</h1>
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