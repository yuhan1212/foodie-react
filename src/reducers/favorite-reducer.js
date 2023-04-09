import {createSlice} from "@reduxjs/toolkit";
import {isFavoriteThunk, findFavoritesByUserIdThunk, addFavoriteThunk, removeFavoriteThunk, findAllFavoritesThunk} from "../services/favorite-thunks";

const initialState = {
    // favorites: [{"_id":"6432c0d557bce82bb8f40653","userId":"643214d9310aaac5adc27d78","username":"y.zou6917@gmail.com","recipeId":"52819","recipeName":"Cajun spiced fish tacos","recipeImg":"https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg","__v":0},{"_id":"6432c10c57bce82bb8f40655","userId":"643214d9310aaac5adc27d78","username":"y.zou6917@gmail.com","recipeId":"52819","recipeName":"Cajun spiced fish tacos","recipeImg":"https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg","__v":0}],
    favorites: [],
    loading: false,
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [isFavoriteThunk.pending]: (state) => {
            state.loading = true;
            state.status = "isFavorite loading";
        },
        [isFavoriteThunk.fulfilled]: (state, action) => {
            return {
                ...action.payload,
                loading: false,
                status: "isFavorite fulfilled",
            };
        },
        [isFavoriteThunk.rejected]: (state, action) => {
            state.loading = false;
            state.status = "isFavorite rejected";
            state.error = action.error;
        },

        [findFavoritesByUserIdThunk.pending]: (state) => {
            state.loading = true
            state.favorites = []
            state.status = "findFavoritesByUserId loading";
        },
        [findFavoritesByUserIdThunk.fulfilled]: (state, { payload }) => {
                state.favorites = payload
                state.loading = false
            console.log("reducers")
            console.log(state.favorites)
        },
        [findFavoritesByUserIdThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.status = "findFavoritesByUserId rejected";
        },

        [addFavoriteThunk.pending]: (state, { payload }) => {
            state.loading = true;
            state.status = "addFavorite loading";
        },
        [addFavoriteThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.favorites.push(payload)

        },
        [addFavoriteThunk.rejected]: (state, { payload }) => {
            state.loading = false;
            state.status = "addFavorite rejected";
        },

        [removeFavoriteThunk.pending]: (state, { payload }) => {
            state.loading = true;
            state.status = "removeFavorite loading";
        },
        [removeFavoriteThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.loading = false
            state.favorites = state.favorites
                .filter(f => f.userId !== payload.userId || f.recipeId !== payload.recipeId)

        },
        [removeFavoriteThunk.rejected]: (state, { payload }) => {
            state.loading = false;
            state.status = "removeFavorite rejected";
        },

        [findAllFavoritesThunk.pending]: (state) => {
            state.loading = true;
            state.status = "findAllFavorites loading";
        },
        [findAllFavoritesThunk.fulfilled]: (state, action) => {
            return {
                ...action.payload,
                loading: false,
                status: "findAllFavorites fulfilled",
            };

        },
        [findAllFavoritesThunk.rejected]: (state) => {
            state.loading = false;
            state.status = "findAllFavorites rejected";
        },

    },
});

export default favoritesSlice.reducer;