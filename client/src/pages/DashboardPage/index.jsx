import React, { useContext } from 'react';

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
        </>
    );
}

export default DashboardPage;