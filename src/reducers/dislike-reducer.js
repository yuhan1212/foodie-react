import {createSlice} from "@reduxjs/toolkit";
import {isDislikeThunk, findDislikesByUserIdThunk, addDislikeThunk, removeDislikeThunk, findAllDislikesThunk} from "../services/dislike-thunks";

const initialState = {
    dislikes: [],
    loading: false,
}

const dislikesSlice = createSlice({
    name: "dislike",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [isDislikeThunk.pending]: (state) => {
                state.loading = true;
                state.status = "isDislike loading";
        },
        [isDislikeThunk.fulfilled]: (state, action) => {
                return {
                    ...action.payload,
                    loading: false,
                    status: "isDislike fulfilled",
                };
        },
        [isDislikeThunk.rejected]: (state, action) => {
                state.loading = false;
                state.status = "isDislike rejected";
                state.error = action.error;
        },


        [addDislikeThunk.pending]:
            (state, { payload }) => {
                state.loading = true;
                state.status = "addDislike loading";
            },
        [addDislikeThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.dislikes.push(payload);

            },
        [addDislikeThunk.rejected]:
            (state, { payload }) => {
                state.loading = false;
                state.status = "addDislike rejected";
            },

        [findAllDislikesThunk.pending]:
            (state) => {
                state.loading = true;
                state.status = "findAllDislikes loading";
            },
        [findAllDislikesThunk.fulfilled]:
            (state, action) => {
                return {
                    ...action.payload,
                    loading: false,
                    status: "findAllDislikes fulfilled",
                };

        },
        [findAllDislikesThunk.rejected]:
            (state) => {
                state.loading = false;
                state.status = "findAllDislikes rejected";
            },

        [findDislikesByUserIdThunk.pending]:
            (state) => {
                state.loading = true;
                state.dislikes = [];
                state.status = "findDislikesByUserId loading";
            },
        [findDislikesByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.dislikes = payload;

            },
        [findDislikesByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
                state.status = "findDislikesByUserId rejected";
            },

        [removeDislikeThunk.pending]:
            (state, { payload }) => {
                console.log('removeDislikeThunk pending');
                state.loading = true;
                state.status = "removeDislike loading";
            },
        [removeDislikeThunk.fulfilled]:
            (state, { payload }) => {
                console.log('removeDislikeThunk in reducer', payload);
                state.loading = false;
                state.dislikes = state.dislikes
                    .filter(f => f._id !== payload._id)
                console.log('removeDislikeThunk fulfilled')

            },
        [removeDislikeThunk.rejected]:
            (state) => {
                console.log('reject');
                state.loading = false;
                state.status = "removeDislike rejected";
            },

    },
});

export default dislikesSlice.reducer;