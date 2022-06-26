import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import styled from "styled-components";
import './styles.css'
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai'

function NavBar(){

    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    const Button = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  margin: 8px 8px;
  cursor: pointer;
`;

    let user = JSON.parse(localStorage.getItem('user'));

    return (
        <>
        <div width='100%'>
        <div className='navbarleft'>
        <ul>
            <li className='linavbar'><a href='/'><AiOutlineHome/>Home</a></li>
            <li className='linavbar'><a href='/dashboard'><AiOutlineDashboard/>DashBoard</a></li>
        </ul>
        </div>
        <div className='navbarright'>
        <p>Olá, { user.usuario_primeiro_nome } <Button onClick={ handleLogout }>Sair</Button> </p>
        </div>
        </div>

        


        </>
    )
}

export default NavBar;