import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth';
import styled from "styled-components";
import './styles.css'
import { AiOutlineHome, AiOutlineDashboard } from 'react-icons/ai'
import logo from '../ImageLogo/logo.PNG'



function NavBarPublic(){

    const Button = styled.button`
  padding: 4px 8px;
  border-radius: 5px;
  margin: 8px 8px;
  cursor: pointer;
`;


    return (
        <>
        <div className='box'>
        <div class='logo'>
            <img src={logo} /></div>
            <svg viewBox="0 0 1100 180">
                <path fill="#006650" fill-opacity='85%' d="M0,0L480,96L960,256L1440,288L1440,0L960,0L480,0L0,0Z">
                </path>
            </svg>
        </div>
        
        <div width='100%'>
        <div className='navbarleft'>
        <div className='title1'><h1>Agenda do Vale</h1></div>
        </div>
        
        </div>

        
        

        </>
    )
}

export default NavBarPublic;