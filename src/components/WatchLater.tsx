import React, { FC } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { clearItems } from '../redux/slices/watchLaterReducer'
import { RootState, useAppDispatch } from '../redux/store'
import { movieType } from '../types/movieType'
import Movie from './Movie'
import MovieFav from './MovieFav'


type RowProps = {
  title: string;
  movies: movieType[];
}

const WatchLater: FC<RowProps> = ({ title, movies }) => {
  const dispatch = useAppDispatch()
  
  const handleClear = () => {
    dispatch(clearItems())
  }

  return (

    <div className='py-10'>
      <div className='flex mb-4 items-center'>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <button
          className='text-white px-6 bg-red-600 rounded-lg py-1 ml-4'
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      
      <div className='relative flex items-center'>
        <div>
          {movies.map((item: movieType, i) =>
            <MovieFav key={item.id} item={item} />
          )}
        </div>
      
      </div>
    </div>


  )
}

export default WatchLater