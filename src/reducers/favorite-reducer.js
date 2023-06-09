import {createSlice} from "@reduxjs/toolkit";
import {isFavoriteThunk, findFavoritesByUserIdThunk, addFavoriteThunk, removeFavoriteThunk, findAllFavoritesThunk} from "../services/favorite-thunks";

const initialState = {
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


        [addFavoriteThunk.pending]:
            (state, { payload }) => {
                state.loading = true;
                state.status = "addFavorite loading";
            },
        [addFavoriteThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.favorites.push(payload);

            },
        [addFavoriteThunk.rejected]:
            (state, { payload }) => {
                state.loading = false;
                state.status = "addFavorite rejected";
            },

        [findAllFavoritesThunk.pending]:
            (state) => {
                state.loading = true;
                state.status = "findAllFavorites loading";
            },
        [findAllFavoritesThunk.fulfilled]:
            (state, action) => {
                return {
                    ...action.payload,
                    loading: false,
                    status: "findAllFavorites fulfilled",
                };

        },
        [findAllFavoritesThunk.rejected]:
            (state) => {
                state.loading = false;
                state.status = "findAllFavorites rejected";
            },

        [findFavoritesByUserIdThunk.pending]:
            (state) => {
                state.loading = true;
                state.favorites = [];
                state.status = "findFavoritesByUserId loading";
            },
        [findFavoritesByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.favorites = payload;

            },
        [findFavoritesByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
                state.status = "findFavoritesByUserId rejected";
            },

        [removeFavoriteThunk.pending]:
            (state, { payload }) => {
                console.log('removeFavoriteThunk pending');
                state.loading = true;
                state.status = "removeFavorite loading";
            },
        [removeFavoriteThunk.fulfilled]:
            (state, { payload }) => {
                console.log('removeFavoriteThunk in reducer', payload);
                state.loading = false;
                state.favorites = state.favorites
                    .filter(f => f._id !== payload._id)
                console.log('removeFavoriteThunk fulfilled')

            },
        [removeFavoriteThunk.rejected]:
            (state) => {
                console.log('reject');
                state.loading = false;
                state.status = "removeFavorite rejected";
            },

    },
});

export default favoritesSlice.reducer;