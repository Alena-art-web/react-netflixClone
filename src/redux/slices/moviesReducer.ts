import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { request } from "http";
import requests from "../../Requests";
import { itemsType, movieType } from "../../types/movieType";
import { RootState } from "../store";

type initialStateType = {
    items:movieType[];
    status: 'loading' | 'success' | 'error';
}

const initialState: initialStateType = {
    items: [],
    status: 'loading'
}

export const fetchMovies = createAsyncThunk<itemsType, Record<string, string>>(
    'movies/fetchMoviesStatus',
    async () => {
        const { data } = await axios.get<itemsType>(
            requests.requestTopRated
        )
        return data
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.status = 'loading'
            state.items = []
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.items = action.payload.results
            state.status = 'success'
        })
        builder.addCase(fetchMovies.rejected, (state) => {
            state.status = 'error'
            state.items = []
        })
    }
})

export const {getMovies} = moviesSlice.actions

export const selectMovies = (state: RootState) => state.movies

export default moviesSlice.reducer