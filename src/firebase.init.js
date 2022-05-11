// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjKcegM_IfNpkXdVzh7KpOPZwKfXpiyq4",
  authDomain: "doctors-appointment-bc374.firebaseapp.com",
  projectId: "doctors-appointment-bc374",
  storageBucket: "doctors-appointment-bc374.appspot.com",
  messagingSenderId: "1059903596370",
  appId: "1:1059903596370:web:30d0654e7ed2d3a74bbc8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;