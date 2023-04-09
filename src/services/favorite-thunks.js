import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./favorite-service";

const FAVORITE = 'favorite'
export const isFavoriteThunk = createAsyncThunk(
    FAVORITE, async (recipeId, userId) => {
        const isFavorite = await service.isFavorite(recipeId, userId)
        return isFavorite
    }
)

export const findFavoritesByUserIdThunk = createAsyncThunk(
    FAVORITE, async (userId) => {
        await service.findFavoritesByUserId(userId)

        console.log("in favorite thunk", await service.findFavoritesByUserId(userId))
    }
)

export const addFavoriteThunk = createAsyncThunk(
    FAVORITE, async ({recipeId, userId, username, recipeName, recipeImg}) => {
        const new_favorite = await service.addFavorite(recipeId, userId, username, recipeName, recipeImg)
        return new_favorite
    }

)

export const removeFavoriteThunk = createAsyncThunk(
    FAVORITE, async (recipeId, userId) => {
        await service.removeFavorite(recipeId, userId)
        return recipeId
    }
)

export const findAllFavoritesThunk = createAsyncThunk(
    FAVORITE, async () => {
        await service.findAllFavorites()
    }

)