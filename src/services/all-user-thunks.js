import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-service";

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