import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";
const REVIEW_API = `${API_BASE}/reviews`;

export const findReviewsForMeal = (mealId) =>
    axios.get(`${REVIEW_API}/${mealId}`, { withCredentials: true })
        .then(response => response.data)

export const createReviewForMeal = (mealId, textArea, username, mealName, mealImg, userId) => {
    const body = { mealId, textArea, username, mealName, mealImg, userId };
    return axios.post(`${REVIEW_API}/${mealId}`, body, { withCredentials: true })
        .then(response => response.data);
}

export const deleteReview = (mealId, reviewId) =>
    axios.delete(`${REVIEW_API}/${mealId}/${reviewId}`, { withCredentials: true })
        .then(response => response.data);

export const updateReview = (mealId, review) =>
    axios.put(`${REVIEW_API}/${mealId}`, review, { withCredentials: true })
        .then(response => response.data);

export const findReviewsByUsername = (username) =>
    axios.get(`${REVIEW_API}/username/${username}`, { withCredentials: true })
        .then(response => response.data);

const api = {
    findReviewsForMeal,
    createReviewForMeal,
    deleteReview,
    updateReview,
    findReviewsByUsername
}

export default api;
