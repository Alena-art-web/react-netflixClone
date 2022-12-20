import axios from 'axios'
import React, { useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchMovies, selectMovies } from '../redux/slices/moviesReducer'
import { setItems } from '../redux/slices/watchLaterReducer'
import { RootState, useAppDispatch } from '../redux/store'
import requests from '../Requests'

const Main = () => {
    const { items } = useSelector(selectMovies)
    const isAuth = useSelector((state: RootState) => state.user.data.userId)
    const item: any = items[Math.floor(Math.random() * items.length)]
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const getMovies = () => dispatch(fetchMovies({}))

    useEffect(() => {
        //axios.get(requests.requestTrending).then((response) => setMovies(response.data.results))
        getMovies()

    }, [])

    const textLength = (str: string, num: number) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...'
        } else {
            return str
        }
    }

    const handleWatch = () => {

        if (isAuth) { 
            dispatch(setItems(item)) 
        } else {
            navigate('/auth')
        }
    }

    return (
        <div className='w-full h-[550px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='object-cover w-full h-full' src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt="" />
                <div className='absolute top-[20%] w-full p-4 md:p-8'>
                    <h1 className='font-bold text-3xl md:text-5xl text-white'>{item?.title}</h1>
                    <div className='my-4'>
                        <button className='py-2 px-5 bg-gray-300 text-black border border-gray-300'>Play</button>
                        <button
                            className='py-2 px-5 text-white ml-4 border'
                            onClick={handleWatch}
                        >
                            Watch later
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm mb-4'>Released: {item?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{textLength(item?.overview, 150)}</p>
                </div>
            </div>
        </div>
    )
}

export default Main