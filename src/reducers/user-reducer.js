import {createSlice} from "@reduxjs/toolkit";
import {autoLoginThunk, loginThunk, registerThunk, updateUserThunk, logoutThunk} from "../services/user-thunks";

const initialState = {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: {},
    avatar: "",
    bio: "",
    role: "",
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: {
        [registerThunk.pending]: (state) => {
            state.loading = true;
            state.status = "register loading";
        },
        [registerThunk.fulfilled]: (state, action) => {
            // update the whole state
            state.loading = false;
            state.status = "register fulfilled";
        },
        [registerThunk.rejected]: (state, action) => {
            state.loading = false;
            state.status = "register rejected";
            state.error = action.error;
        },
        [loginThunk.pending]: (state) => {
            state.loading = true;
            state.status = "login loading";
        },
        [loginThunk.fulfilled]: (state, action) => {
            localStorage.setItem("userId", action.payload._id);
            // update the whole state
            return {
                ...action.payload,
                loading: false,
                status: "login fulfilled",
            };
        },
        [loginThunk.rejected]: (state, action) => {
            localStorage.removeItem("userId");
            state.loading = false;
            state.error = action.error;
            state.status = "login rejected";
        },
        [autoLoginThunk.pending]: (state) => {
            state.loading = true;
            state.status = "auto login loading";
        },
        [autoLoginThunk.fulfilled]: (state, action) => {
            if (action.payload) {
                // update the whole state
                return {
                    ...action.payload,
                    loading: false,
                    status: "auto login fulfilled",
                };
            } else {
                localStorage.removeItem("userId");
                state.loading = false;
                state.status = "no stored user";
            }
        },
        [autoLoginThunk.rejected]: (state, action) => {
            localStorage.removeItem("userId");
            state.loading = false;
            state.error = action.error;
            state.status = "auto login rejected";
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [logoutThunk.fulfilled]: (state) => {
            state.currentUser = null;
        },

    },
    reducers: {
        statusReset: (state) => {
            state.status = "";
            state.error = "";
        },
        logout: (state) => {
            // update the whole state
            localStorage.removeItem("userId");
            return initialState;
        }
    }
});

export const {login, logout, statusReset, updateProfile} = userSlice.actions;
export default userSlice.reducer;