import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { request } from "http";
import requests from "../../Requests";
import { itemsType, movieType, userType } from "../../types/movieType";
import { getUserDataFromLS } from "../../untils/getUserData";

type initialStateType = {
    data: userType;
    
}

const user = getUserDataFromLS()
const initialState: initialStateType = {
    data: user
    // data: {
    //     userId: '',
    //     userEmail: ''
    // }
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.data.userEmail = action.payload.userEmail
            state.data.userId = action.payload.userId
            
        }
    },
})

export const { getUser } = userSlice.actions

export default userSlice.reducer