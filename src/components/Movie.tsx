import React, { useState } from 'react'
import { movieType } from '../types/movieType'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, setItems } from '../redux/slices/favoritesReducer'
import { RootState } from '../redux/store'
import { useNavigate } from 'react-router-dom'

type MovieProps = {
    item: movieType
}

const Movie: React.FC<MovieProps> = ({ item }) => {
    const [like, setLike] = useState(false)
    const dispatch = useDispatch()
    const isAuth = useSelector((state: RootState) => state.user.data.userId)
    const navigate = useNavigate()


    const handleLikeOn = () => {

        setLike(!like)
        dispatch(setItems(item))
        if (!isAuth) {
            navigate('/registration')
        }

    }

    const handleLikeOff = () => {
        setLike(!like)
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
                <p>
                    {like ?
                        <FaHeart
                            className='absolute top-4 left-4 text-gray-400'
                            onClick={handleLikeOff}
                        /> :
                        <FaRegHeart
                            className='absolute top-4 left-4 text-gray-400'
                            onClick={handleLikeOn}
                        />
                    }
                </p>

            </div>
        </div>
    )
}

export default Movie