import React, { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import "./styles.css";

const LoginPage = () => {

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit", { email, password })
        login(email, password);
    }

    return (
        <div id="login">
            
            <h1 className="login-title">Login do sistema</h1>
            
            <form onSubmit={handleSubmit} className="login-form">
                <fieldset className="login-form-field">
                    <label htmlFor="login-email">Email:</label>
                    <input 
                        type="login-email" 
                        name="login-email" 
                        id="login-email" 
                        className="login-input"
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)} 
                    />
                </fieldset>
                <fieldset className="login-form-field">
                    <label htmlFor="login-password">Senha:</label>
                    <input 
                        type="password" 
                        name="login-password" 
                        id="login-password" 
                        className="login-input" 
                        value={password} 
                        onChange={(event) => setPassword(event.target.value)} 
                    />
                </fieldset>
                <fieldset className="login-form-field">
                    <button type="submit" className="login-button">Entrar</button>
                </fieldset>
            </form>
        </div>
    );
}

export default LoginPage;