import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./dislike-service";

export const isDislikeThunk = createAsyncThunk(
    'dislike/isDislike', async (recipeId, userId) => {
        const isDislike = await service.isDislike(recipeId, userId)
        return isDislike
    }
)

export const findDislikesByUserIdThunk = createAsyncThunk(
    'dislike/findDislikesByUserId', async (userId) => {
        const dislike = await service.findDislikesByUserId(userId)
        return dislike
    }
)

export const addDislikeThunk = createAsyncThunk(
    'dislike/addDislike', async ({recipeId, userId, username, recipeName, recipeImg}) => {
        const new_dislike = await service.addDislike(recipeId, userId, username, recipeName, recipeImg)
        return new_dislike
    }

)

export const removeDislikeThunk = createAsyncThunk(
    'dislike/removeDislike', async (dislike) => {
        await service.removeDislike(dislike)
        return dislike
    }
)

export const findAllDislikesThunk = createAsyncThunk(
    'dislike/findAllDislikes', async () => {
        return await service.findAllDislikes();
    }

)