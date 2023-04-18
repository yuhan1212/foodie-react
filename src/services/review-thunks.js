import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./review-service";

export const createReview = createAsyncThunk(
    "reviews/createReview",
    async ({ mealId, textArea, username, mealName, mealImg, userId }, { rejectWithValue }) => {
        try {
            const response = await api.createReviewForMeal(mealId, textArea, username, mealName, mealImg, userId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const deleteReview = createAsyncThunk(
    "reviews/deleteReview",
    async ({ mealId, reviewId }, { rejectWithValue }) => {
        try {
            const response = await api.deleteReview(mealId, reviewId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const updateReview = createAsyncThunk(
    "reviews/updateReview",
    async ({ mealId, review }, { rejectWithValue }) => {
        try {
            const response = await api.updateReview(mealId, review);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getReviewsByMeal = createAsyncThunk(
    "reviews/getReviewsByMeal",
    async (mealId, { rejectWithValue }) => {
        try {
            const response = await api.findReviewsForMeal(mealId);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const getReviewsByUsername = createAsyncThunk(
    "reviews/getReviewsByUsername",
    async (username, { rejectWithValue }) => {
        try {
            const response = await api.findReviewsByUsername(username);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
