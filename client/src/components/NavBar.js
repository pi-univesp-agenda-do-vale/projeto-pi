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
        <div className='box'>
            <svg viewBox="0 0 1440 180">
                <path fill="#006650" fill-opacity='85%' d="M0,0L480,96L960,256L1440,288L1440,0L960,0L480,0L0,0Z">
                </path>
            </svg>
        </div>
        
        <div width='100%'>
        <div className='navbarleft'>
        <div className='title1'><h1>Agenda do Vale</h1></div>
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