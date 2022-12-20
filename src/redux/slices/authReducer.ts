import { createSlice } from "@reduxjs/toolkit";
import {userType } from "../../types/movieType";
import { getUserDataFromLS } from "../../untils/getUserData";
import { RootState } from "../store";

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

export const selectUser = (state: RootState) => state.user.data

export default userSlice.reducer