import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const DISLIKE_API = `${API_BASE}/dislike`;
export const isDislike = async (recipeId, userId) => {
    const response = await axios.get(`${DISLIKE_API}/${recipeId}/${userId}`);
    return response.data;
}

export const findDislikesByUserId = async (userId) => {
    const response = await axios.get(`${DISLIKE_API}/${userId}`);
    return response.data;
}

export const addDislike = async (recipeId, userId, username, recipeName, recipeImg) => {
    const response = await axios.post(DISLIKE_API, {recipeId, userId, username, recipeName, recipeImg});
    return response.data;
}

export const removeDislike = async (favorite) => {
    await axios.delete(DISLIKE_API, { data: favorite});
    return favorite;
}

export const findAllDislikes = async () => {
    const response = await axios.get(DISLIKE_API);
    return response.data;
}

const dislikeService = {
    isDislike,
    findDislikesByUserId,
    addDislike,
    removeDislike,
    findAllDislikes
}

export default dislikeService