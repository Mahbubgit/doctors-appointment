// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

/*
REACT_APP_apiKey=AIzaSyDjKcegM_IfNpkXdVzh7KpOPZwKfXpiyq4
REACT_APP_authDomain=doctors-appointment-bc374.firebaseapp.com
REACT_APP_projectId=doctors-appointment-bc374
REACT_APP_storageBucket=doctors-appointment-bc374.appspot.com
REACT_APP_messagingSenderId=1059903596370
REACT_APP_appId=1:1059903596370:web:30d0654e7ed2d3a74bbc8b
*/ 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;