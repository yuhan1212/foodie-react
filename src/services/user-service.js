import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const USERS_API = `${API_BASE}/users`;

export const userLogin = async ({email, password}) => {
    const response = await axios.post(`${API_BASE}/login`, {email, password});
    return response.data;
}

export const autoLogin = async () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
        const response = await axios.get(`${API_BASE}/users/${userId}`);
        return response.data;
    } else {
        // no stored user id, so no auto login
        console.log("no stored user id, so no auto login");
        return null;
    }
}

export const userRegister = async (user) => {
    const response = await axios.post(`${API_BASE}/register`, user);
    return response.data;
}

export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
}

export const findCurrentUser = async (user) => {
    await axios.get(`${API_BASE}/user`);
    return user;
}

export const findUserById = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}`);
    return response.data;
}

export const updateUser = async (user) => {
    return axios.put(`${USERS_API}/${user._id}`, user);
}

export const removeUser = async (user) => {
    await axios.delete(USERS_API, { data: user});
    return user;
}

export const logout = async () => {
    const response = await axios.post(`${USERS_API}/logout`);
    return response.data;
};
