import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./favorite-service";

export const isFavoriteThunk = createAsyncThunk(
    'favorite/isFavorite', async (recipeId, userId) => {
        const isFavorite = await service.isFavorite(recipeId, userId)
        return isFavorite
    }
)

export const findFavoritesByUserIdThunk = createAsyncThunk(
    'favorite/findFavoritesByUserId', async (userId) => {
        const favorites = await service.findFavoritesByUserId(userId)
        return favorites
    }
)

export const addFavoriteThunk = createAsyncThunk(
    'favorite/addFavorite', async ({recipeId, userId, username, recipeName, recipeImg}) => {
        const new_favorite = await service.addFavorite(recipeId, userId, username, recipeName, recipeImg)
        return new_favorite
    }

)

export const removeFavoriteThunk = createAsyncThunk(
    'favorite/removeFavorite', async (favorite) => {
        await service.removeFavorite(favorite)
        return favorite
    }
)

export const findAllFavoritesThunk = createAsyncThunk(
    'favorite/findAllFavorites', async () => {
        return await service.findAllFavorites();
    }

)