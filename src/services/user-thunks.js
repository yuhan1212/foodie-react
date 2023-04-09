import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-service";

export const loginThunk = createAsyncThunk(
    'login', async (userCredential) =>
        await service.userLogin(userCredential)
)

export const registerThunk = createAsyncThunk(
    'register', async (user) =>
        await service.userRegister(user)
)