import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        roles: [],
    },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.roles = action.payload.roles;
        },
        logout: (state) => {
            state.email = "";
            state.name = "";
            state.roles = [];
        },
    }
});

export const {login} = userSlice.actions;
export const {logout} = userSlice.actions;

export default userSlice.reducer;