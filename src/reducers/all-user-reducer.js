import {createSlice} from "@reduxjs/toolkit";
import {findAllUsersThunk, removeUserThunk} from "../services/all-user-thunks";
// import {removeUserThunk} from "../services/user-thunks";

const initialState = {
    users: [],
    loading: false,
}

const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {},
    extraReducers: {

        [findAllUsersThunk.pending]:
            (state) => {
                state.loading = true;
                state.users = [];
                state.status = "findAllUsers loading";
            },
        [findAllUsersThunk.fulfilled]:
            (state, { payload }) => {
                state.users = payload;
                state.loading = false;
                state.status = "findAllUsers fulfilled";
            },
        [findAllUsersThunk.rejected]:
            (state) => {
                state.loading = false;
                state.status = "findAllUsers rejected";
            },

        [removeUserThunk.pending]:
            (state, { payload }) => {
                state.loading = true;
                state.status = "removeUserThunk loading";
            },
        [removeUserThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.users = state.users
                    .filter(u => u._id !== payload._id)
                console.log('removeUserThunk fulfilled', payload)

            },
        [removeUserThunk.rejected]:
            (state) => {
                state.loading = false;
                state.status = "removeFavorite rejected";
            },

    },
});

export default usersSlice.reducer;