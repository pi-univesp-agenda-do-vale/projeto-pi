import React, { useState, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { login } from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);

    }, []);

    const loginFunc = async (email, password) => {

        if (
            email !== ""
            && password !== ""
        ) {
            let logged = await login(email, password);
            if (logged.data === true) {

                const loggedUser = {
                    id: '123',
                    email,
                };

                localStorage.setItem('user', JSON.stringify(loggedUser));

                setUser(loggedUser);

                navigate("/dashboard");
            } else {
                alert("Verifique os campos e tente novamente");
            }
        } else {
            alert("Verifique os campos e tente novamente");
        }

    };
    
    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, loading, loginFunc, logout }}>
            {children}
        </AuthContext.Provider>
    )
}