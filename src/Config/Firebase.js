// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLnS20C77XOrYhftEA0pSvSX6O026No8A",
    authDomain: "tutorsite-68141.firebaseapp.com",
    projectId: "tutorsite-68141",
    storageBucket: "tutorsite-68141.appspot.com",
    messagingSenderId: "713094738733",
    appId: "1:713094738733:web:45d585d35911fa532d19a4",
    measurementId: "G-4D65Z3GJDM"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)