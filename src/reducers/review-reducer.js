import { createSlice } from "@reduxjs/toolkit";
import { createReview, deleteReview, updateReview, getReviewsByMeal, getReviewsByUsername } from "../services/review-thunks";

const initialState = {
    mealId: "",
    textArea: "",
    username: "",
    userId: "",
    mealName: "",
    mealImg: "",
    reviews: [],
    status: "idle",
    error: null,
};

const reviewSlice = createSlice({
    name: "review",
    initialState: initialState,
    extraReducers: {
        [createReview.pending]: (state) => {
            state.loading = true;
            state.status = "createReview loading";
        },
        [createReview.fulfilled]: (state, action) => {
            return {
                ...action.payload,
                loading: false,
                status: "createReview fulfilled",
            };
        },
        [createReview.rejected]: (state, action) => {
            state.loading = false;
            state.status = "createReview rejected";
            state.error = action.error;
        },

        [updateReview.pending]:
            (state, { payload }) => {
                state.loading = true;
                state.status = "updateReview loading";
            },
        [updateReview.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.favorites.push(payload);

            },
        [updateReview.rejected]:
            (state, { payload }) => {
                state.loading = false;
                state.status = "updateReview rejected";
            },

        [getReviewsByUsername.pending]:
            (state) => {
                state.loading = true;
                state.status = "getReviewsByUsername loading";
            },
        [getReviewsByUsername.fulfilled]:
            (state, action) => {
                return {
                    ...action.payload,
                    loading: false,
                    status: "getReviewsByUsername fulfilled",
                };

            },
        [getReviewsByUsername.rejected]:
            (state) => {
                state.loading = false;
                state.status = "getReviewsByUsername rejected";
            },

        [getReviewsByMeal.pending]:
            (state) => {
                state.loading = true;
                state.favorites = [];
                state.status = "getReviewsByMeal loading";
            },
        [getReviewsByMeal.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.favorites = payload;

            },
        [getReviewsByMeal.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
                state.status = "getReviewsByMeal rejected";
            },

        [deleteReview.pending]:
            (state, { payload }) => {
                console.log('deleteReview pending');
                state.loading = true;
                state.status = "deleteReview loading";
            },
        [deleteReview.fulfilled]:
            (state, { payload }) => {
                console.log('deleteReview in reducer', payload);
                state.loading = false;
                state.favorites = state.favorites
                    .filter(f => f._id !== payload._id)
                console.log('deleteReview fulfilled')

            },
        [deleteReview.rejected]:
            (state) => {
                console.log('reject');
                state.loading = false;
                state.status = "removeFavorite rejected";
            },
    },
});

export default reviewSlice.reducer;
