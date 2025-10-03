
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa_cSSZYw2DOyOZ5q_cW_8w85tuWVnJBI",
  authDomain: "loginvirtualcourses-104be.firebaseapp.com",
  projectId: "loginvirtualcourses-104be",
  storageBucket: "loginvirtualcourses-104be.firebasestorage.app",
  messagingSenderId: "644858197689",
  appId: "1:644858197689:web:0500890e4f1809c100cd68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
const provider = new GoogleAuthProvider();


export {auth, provider}
