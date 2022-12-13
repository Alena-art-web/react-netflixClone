import { getAuth } from "firebase/auth"



export const getUserDataFromFirebase = () => {
    const user = getAuth()
    const user_id = user.currentUser?.uid
    const user_email = user.currentUser?.email
    const userAuth = {
        userId: user_id,
        userEmail: user_email
    }

    return userAuth
}

export const getUserDataFromLS = () => {
    const data = localStorage.getItem('user')
    const user = data ? JSON.parse(data) : {}


    return user
}

export const getItemsFromLS = (itemName: string) => {
    const data = localStorage.getItem(itemName)
    const items = data ? JSON.parse(data) : {}


    return items
}
