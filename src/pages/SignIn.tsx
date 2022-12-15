import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/slices/authReducer'
import { RootState } from '../redux/store'
import { Inputs } from '../types/inputType'


const SignIn = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: RootState) => state.user.data.userId)

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    const {
        handleSubmit,
        register,
        watch,
        reset,
        formState: {
            errors,
            isValid
        }
    } = useForm<Inputs>({
        mode: 'onBlur'
    })

    if (isAuth) {
        return <Navigate to='/' />
    }

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { email, password } = data
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(getUser({
                    userId: user.uid,
                    userEmail: user.email
                }))
                localStorage.setItem('user', JSON.stringify({
                    userId: user.uid,
                    userEmail: user.email
                }))
            })
            .catch(console.error)

        //reset()
    }


    return (
        <div className='w-full h-screen'>
            <img
                className='hidden sm:block absolute w-full h-full object-cover'
                src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            />
            <div className='bg-black/80 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4  py-24 z-50'>
                <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='font-bold text-3xl '>Sign In</h1>
                        <form
                            className='flex flex-col py-4 w-full'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                className='p-3 my-2 bg-gray-700 rounded'
                                placeholder='Email'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    },
                                    pattern: {
                                        value: emailRegex,
                                        message: 'Email is not correct'
                                    }
                                })}
                            />
                            {errors.email && <span className='text-white'>{errors.email.message} </span>}
                            <input
                                className='p-3 my-2 bg-gray-700 rounded'
                                placeholder='Password'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'This field is required'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "Length must be not more 10"
                                    }
                                })}
                            />

                            {errors.password && <span>This field is required</span>}

                            <button
                                className={isValid ? 'cursor-pointer block p-3 bg-red-600 my-6 rounded font-bold' : 'block p-3 bg-gray-600 my-6 rounded font-bold'}
                                type="submit"
                                disabled={!isValid}
                            >
                                Sign In
                            </button>
                            <div className='flex justify-between items-center text-sm text-gray-600'>
                                <p><input className='mr-2' type="checkbox" />Remember me</p>
                                <p><a href="/">Need Help?</a></p>
                            </div>
                            <p className='py-8'>
                                <span className='text-gray-600 mr-4'>New to Netflix?</span>
                                <Link to="/registration">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn

