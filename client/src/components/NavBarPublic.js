import React from 'react';
import styled from "styled-components";
import './styles.css'
import logo from '../images/logo.PNG'



function NavBarPublic(){

    return (
        <>
        <div className='box'>
            <div className='logo'>
                <a href="/"><img src={logo} /></a>
            </div>
            <svg viewBox="0 0 1100 180">
                <path fill="#006650" fillOpacity='85%' d="M0,0L480,96L960,256L1440,288L1440,0L960,0L480,0L0,0Z">
                </path>
            </svg>
        </div>
        <div width='100%'>
            <div className='navbarleft'>
                <div className='title1'>
                    <a href="/">Agenda do Vale</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBarPublic;