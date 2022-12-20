import React from 'react'
import { useSelector } from 'react-redux'
import Favorites from '../components/Favorites'
import WatchLater from '../components/WatchLater'
import { selectFav } from '../redux/slices/favoritesReducer'
import { selectWatchLater } from '../redux/slices/watchLaterReducer'

const Account = () => {
  const moviesFav = useSelector(selectFav)
  const watchLater = useSelector(selectWatchLater)

  return (
    <div>
      {moviesFav.length && <Favorites title='Favorites' movies={moviesFav} />}
      {watchLater.length && <WatchLater title='Watch Later' movies={watchLater}/>}
    </div>
  )
}

export default Account