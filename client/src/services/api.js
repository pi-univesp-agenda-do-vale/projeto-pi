import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const addUser = async (user_name, user_surname, user_email, user_password) => {
    return api.post("/users", { user_name, user_surname, user_email, user_password });
}

export const login = async (user_email, user_password) => {
    return api.post("/users/login", { user_email, user_password })
}