import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import "./styles.css";

const LoginPage = () => {

    const { authenticated, loginFunc } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        loginFunc(email, password);
    }

    return (
        
        <><div className="login">
            <div viewBox='box'>
                <svg viewBox="0 0 1440 180">
                    <path fill="#006750" fill-opacity='85%' d="M0,0L480,96L960,256L1440,288L1440,0L960,0L480,0L0,0Z">
                    </path>
                </svg>
                <h1 className='login-title1'>Agenda do Vale</h1>
            </div>
        </div>
        
        <div>
            {/*tentar alinhar esse div que é o login */}
                <h2 className="login-title">Login do sistema</h2>

                <form onSubmit={handleSubmit} className="login-form">
                    <fieldset className="login-form-field">
                        <label htmlFor="login-email">Email:</label>
                        <input
                            type="email"
                            name="login-email"
                            id="login-email"
                            className="login-input"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </fieldset>
                    <fieldset className="login-form-field">
                        <label htmlFor="login-password">Senha:</label>
                        <input
                            type="password"
                            name="login-password"
                            id="login-password"
                            className="login-input"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </fieldset>
                    <fieldset className="login-form-field">
                        <button type="submit" className="login-button">Entrar</button>
                    </fieldset>
                </form>
            </div></>
             
    );
}

export default LoginPage;