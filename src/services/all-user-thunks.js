import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./user-service";

const USERS = 'users'
export const findAllUsersThunk = createAsyncThunk(
    USERS, async () => {
        const users = await service.findAllUsers()
        return users ? users : [] // return empty array if no users found
    })


export const removeUserThunk = createAsyncThunk(
    USERS, async (user) => {

        const response = await service.removeUser(user);
        console.log('removeUserThunk', response.data)
        return user._id;
    }
)