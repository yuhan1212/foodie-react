import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, registerThunk} from "../services/user-thunks";

const initialState = {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: {},
    avatar: "",
    about: "",
    roles: [],
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
            // update the whole state
            return {
                ...action.payload,
                loading: false,
                status: "login fulfilled",
            };
        },
        [loginThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
            state.status = "login rejected";
        }
    },
    reducers: {
        statusReset: (state) => {
            state.status = "";
            state.error = "";
        },
        logout: (state) => {
            // update the whole state
            return initialState;
        },
    }
});

export const {login} = userSlice.actions;
export const {logout} = userSlice.actions;
export const {statusReset} = userSlice.actions;

export default userSlice.reducer;