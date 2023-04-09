import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE
    || "http://localhost:4000/api";
export const userLogin = async ({email, password}) => {
    const response = await axios.post(`${API_BASE}/login`, {email, password});
    return response.data;
}

export const userRegister = async (user) => {
    const response = await axios.post(`${API_BASE}/register`, user);
    return response.data;
}

