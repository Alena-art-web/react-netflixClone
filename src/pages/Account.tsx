import React from 'react'
import { useSelector } from 'react-redux'
import Favorites from '../components/Favorites'
import WatchLater from '../components/WatchLater'
import { RootState } from '../redux/store'

const Account = () => {
  const moviesFav = useSelector((state: RootState) => state.favorites.items)
  const watchLater = useSelector((state: RootState) => state.watchLater.items)

  return (
    <div>
      {moviesFav.length && <Favorites title='Favorites' movies={moviesFav} />}
      {watchLater.length && <WatchLater title='Watch Later' movies={watchLater}/>}
    </div>
  )
}

export default Account