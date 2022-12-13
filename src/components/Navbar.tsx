import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/store'
import { signOut} from 'firebase/auth'
import { auth } from '../firebase'
import { getUser } from '../redux/slices/authReducer'

const Navbar = () => {
    const isAuth = useSelector((state: RootState) => state.user.data.userId)
    const favorites = useSelector((state: RootState) => state.favorites.items)
    const watchLater = useSelector((state: RootState) => state.watchLater.items)
    const dispatch = useDispatch()

    useEffect(() => {
      const jsonFav = JSON.stringify(favorites)
      localStorage.setItem('favorites', jsonFav)

      const jsonWatchLater = JSON.stringify(watchLater)
        localStorage.setItem('watchLater', jsonWatchLater)

    
    }, [favorites, watchLater])
    
    
    const logOut = () => {
        signOut(auth)
        dispatch(getUser([]))
        localStorage.removeItem('user')
    }
    
    
    return (
        <div className='w-full flex justify-between z-[100] items-center p-4 absolute'>
            <Link to='/'><h1 className='text-red-600 uppercase text-4xl font-bold cursor-pointer'>Netflix</h1></Link>
            {isAuth ?
                <div>
                    <Link to='/account'><button className='text-white pr-4'>Account</button></Link>
                    <button className='text-white px-6 bg-red-600 rounded-lg py-2' onClick={logOut}>LogOut</button>
                </div> :
                <div>
                    <Link to='/auth'><button className='text-white pr-4'>Sign In</button></Link>
                    <Link to='/registration'><button className='text-white px-6 bg-red-600 rounded-lg py-2'>Sign Up</button></Link>
                </div>
            }
        </div>
    )
}

export default Navbar