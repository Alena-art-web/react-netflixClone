// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOl8JAqEAbOd5zPA4WkK-T_Pra3a595c8",
    authDomain: "netflix-8f239.firebaseapp.com",
    projectId: "netflix-8f239",
    storageBucket: "netflix-8f239.appspot.com",
    messagingSenderId: "610809896096",
    appId: "1:610809896096:web:a040aff34d5ed923727dc5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)