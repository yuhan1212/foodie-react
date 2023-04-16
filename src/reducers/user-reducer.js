import {createSlice} from "@reduxjs/toolkit";
import {autoLoginThunk, loginThunk, registerThunk} from "../services/user-thunks";

const initialState = {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: {},
    avatar: "",
    about: "",
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
        },
        updateProfile(state, action) {
            const profile = state
            profile.email = action.payload.email
            profile.password = action.payload.password
            profile.firstName = action.payload.firstName
            profile.lastName = action.payload.lastName
            profile.username = action.payload.username
            profile.phone = action.payload.phone
            profile.address.street = action.payload.address.street
            profile.address.city = action.payload.address.city
            profile.address.state = action.payload.address.state
            profile.address.zip = action.payload.address.zip
            profile.bio = action.payload.bio
        }
    }
});

export const {login, logout, statusReset, updateProfile} = userSlice.actions;
export default userSlice.reducer;