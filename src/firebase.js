//firebase.js
import { initializeApp } from "firebase/app";

//initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBab3c4-uI55tqSLLKqdAxTifLBrzzsbX8",
    authDomain: "rock-paper-scissors-365a4.firebaseapp.com",
    projectId: "rock-paper-scissors-365a4",
    storageBucket: "rock-paper-scissors-365a4.appspot.com",
    messagingSenderId: "269115813406"
};


// Set variable that initializes our application
const app = initializeApp(firebaseConfig);
