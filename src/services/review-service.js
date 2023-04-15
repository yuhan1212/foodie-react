const REVIEW_URL = "http://localhost:3001/api/reviews";

export const findReviewsForMeal = (mealId) =>
    fetch(`${REVIEW_URL}/${mealId}`, {
        credentials: 'include'
    })
        .then(response => response.json())

export const createReviewForMeal = (mealId, textArea, username, mealName, mealImg, userId) => {
    return fetch(`${REVIEW_URL}/${mealId}`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify({mealId, textArea, username, mealName, mealImg, userId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

export const deleteReview = (mealId, reviewId) =>
    fetch(`${REVIEW_URL}/${mealId}/${reviewId}`, {
        method: "DELETE",
        credentials: 'include',
        body: JSON.stringify({mealId, reviewId}),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateReview = (mealId, review) =>
    fetch(`${REVIEW_URL}/${mealId}`, {
        method: "PUT",
        credentials: 'include',
        body: JSON.stringify(review),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findReviewsByUsername = (username) =>
    fetch(`${REVIEW_URL}/username/${username}`, {
        credentials: 'include'
    })
        .then(response => response.json())


const api = {
    findReviewsForMeal, createReviewForMeal, deleteReview, updateReview, findReviewsByUsername
}

export default api;
