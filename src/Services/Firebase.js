// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2Nws13QFcpvP3oKNUAcQV4lrr1w1AlIQ",
  authDomain: "movieverse-584d1.firebaseapp.com",
  projectId: "movieverse-584d1",
  storageBucket: "movieverse-584d1.firebasestorage.app",
  messagingSenderId: "795101748477",
  appId: "1:795101748477:web:05e89439e2be5903aab294",
  measurementId: "G-MXLJHENRB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)