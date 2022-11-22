import React, { useState, useContext } from 'react';
import NavBarPublic from '../../components/NavBarPublic';
import Footer from "../../components/Footer"

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
            <NavBarPublic />
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
            </div>
            <Footer />
        </>
             
    );
}

export default LoginPage;