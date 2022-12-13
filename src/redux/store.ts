import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import moviesReducer from './slices/moviesReducer'
import userReducer from './slices/authReducer'
import favoritesReducer from './slices/favoritesReducer'
import watchLaterReducer from './slices/watchLaterReducer'

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        user: userReducer,
        favorites: favoritesReducer,
        watchLater: watchLaterReducer
    },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store