const findMealByName = (mealName) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(response => response.json())
}

const findMealById = (mealId) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(response => response.json())
}

export default {
    findMealByName,
    findMealById
}