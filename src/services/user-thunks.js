import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-service";

export const loginThunk = createAsyncThunk(
    'login', async (userCredential) =>
        await service.userLogin(userCredential)
);

export const registerThunk = createAsyncThunk(
    'register', async (user) =>
        await service.userRegister(user)
);

export const findCurrentUserThunk = createAsyncThunk(
    'user/findCurrentUser', async (user) =>
        await service.findCurrentUser(user)
);

export const findUserByIdThunk = createAsyncThunk(
    'users/findUserById', async (userId) => {
        const user = await service.findUserById(userId)
        return user;
    }
);

export const updateUserThunk = createAsyncThunk(
    'users/updateUser', async (user) =>
        await service.updateUser(user)
);

export const findAllUsersThunk = createAsyncThunk(
    'users/findAllUsers', async () => {
        const users = await service.findAllUsers()
        return users ? users : [] // return empty array if no users found
    })


export const removeUserThunk = createAsyncThunk(
    'users/removeUser', async (user) => {
        await service.removeUser(user);
        return user;
    }
)