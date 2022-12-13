import React from 'react'
import { movieType } from '../types/movieType'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { AiFillCloseCircle } from 'react-icons/ai'
import { removeItem } from '../redux/slices/favoritesReducer'

type MovieProps = {
    item: movieType
}

const MovieFav: React.FC<MovieProps> = ({ item }) => {
    const isAuth = useSelector((state: RootState) => state.user.data.userId)
    const dispatch = useDispatch()

    const removeFavItem = () => {
        dispatch(removeItem(item))
    }

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
            <img className='w-full block h-auto' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
            <div
                className='absolute w-full h-full left-0 top-0 opacity-0 text-white hover:bg-black/80 hover:opacity-100'
            >
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center select-none'>
                    {item?.title}
                </p>
                <AiFillCloseCircle 
                    className='absolute top-4 right-2' 
                    size={25} 
                    onClick={removeFavItem}
                />
            </div>
        </div>
    )
}

export default MovieFav