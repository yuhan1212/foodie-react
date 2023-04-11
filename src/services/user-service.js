import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE
    || "http://localhost:4000/api";

const USERS_API = `${API_BASE}/users`;
export const userLogin = async ({email, password}) => {
    const response = await axios.post(`${API_BASE}/login`, {email, password});
    return response.data;
}

export const userRegister = async (user) => {
    const response = await axios.post(`${API_BASE}/register`, user);
    return response.data;
}

export const removeUser = async (user) => {
    await axios.delete(USERS_API, { data: user});
    return user;
}

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}