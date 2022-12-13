import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { movieType } from '../types/movieType'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Movie from './Movie';

type RowProps = {
  title: string;
  fetchUrl: string;
  rowID: string;
}

const Row: React.FC<RowProps> = ({ title, fetchUrl, rowID }) => {
  const [movies, setMovies] = useState([])


  useEffect(() => {
    axios.get(fetchUrl).then(res => setMovies(res.data.results))
  }, [fetchUrl])

  const handleLeft = () => {
    const slider = document.getElementById('slider' + rowID)
    slider!.scrollLeft = slider!.scrollLeft - 500
  }

  const handleRight = () => {
    const slider = document.getElementById('slider' + rowID)
    slider!.scrollLeft = slider!.scrollLeft + 500
  }

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={handleLeft}
          className=' bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider' + rowID}
          className='w-full h-full overflow-auto whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item: movieType, i) =>
            <Movie key={item.id} item={item}/>
            
          )}
        </div>
        <MdChevronRight 
          onClick={handleRight}
          className=' bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' 
          size={40} 
        />
      </div>
    </div>
    )
}

      export default Row