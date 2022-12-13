import { createSlice } from "@reduxjs/toolkit"
import { movieType } from "../../types/movieType"
import { getItemsFromLS } from "../../untils/getUserData"


type initialStateType = {
    items: movieType[]
}

const data = getItemsFromLS('favorites')
const initialState: initialStateType = {
    items: data
}


const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setItems: (state, action) => {
            const findItem = state.items.find(i => i.id === action.payload.id)

            if (!findItem) {
                state.items.push({
                ...action.payload
                })
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload.id)
        },
        clearItems: (state) => {
            state.items = []
        }

    }
})

export const {setItems, removeItem, clearItems} = favoritesSlice.actions

export default favoritesSlice.reducer