import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const FAVORITE_API = `${API_BASE}/favorite`;
console.log("hee")
console.log(FAVORITE_API)
export const isFavorite = async (recipeId, userId) => {
    const response = await axios.get(`${FAVORITE_API}/${recipeId}/${userId}`);
    return response.data;
}

export const findFavoritesByUserId = async (userId) => {
    const response = await axios.get(`${FAVORITE_API}/${userId}`);
    console.log("in favorite service")
    console.log(response.data)
    return response.data;
}

export const addFavorite = async (recipeId, userId, username, recipeName, recipeImg) => {
    const response = await axios.post(FAVORITE_API, {recipeId, userId, username, recipeName, recipeImg});
    return response.data;
}

export const removeFavorite = async (recipeId, userId) => {
    const response = await axios.delete(FAVORITE_API, {recipeId, userId});
    return response.data;
}

export const findAllFavorites = async () => {
    const response = await axios.delete(FAVORITE_API);
    return response.data;
}
