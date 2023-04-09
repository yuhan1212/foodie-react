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
        const favorites = await service.findFavoritesByUserId(userId)
        return favorites
    }
)

export const addFavoriteThunk = createAsyncThunk(
    FAVORITE, async ({recipeId, userId, username, recipeName, recipeImg}) => {
        const new_favorite = await service.addFavorite(recipeId, userId, username, recipeName, recipeImg)
        return new_favorite
    }

)

export const removeFavoriteThunk = createAsyncThunk(
    FAVORITE, async (favorite) => {
        console.log('removeFavoriteThunk', favorite)
        await service.removeFavorite(favorite)
    }
)

export const findAllFavoritesThunk = createAsyncThunk(
    FAVORITE, async () => {
        const favorites = await service.findAllFavorites()
        return favorites
    }

)