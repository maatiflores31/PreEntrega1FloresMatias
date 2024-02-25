import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU_2QgSU4AajTI3oMN7DXOe5IcjVxP-UY",
  authDomain: "proyectofinal-reacts.firebaseapp.com",
  projectId: "proyectofinal-reacts",
  storageBucket: "proyectofinal-reacts.appspot.com",
  messagingSenderId: "460981945891",
  appId: "1:460981945891:web:1d5375f158f467ad6d9396"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
