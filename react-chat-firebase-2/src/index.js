import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom'

import App from './components/App';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRshn4PywWYmNiHRirt7woF67SbtThAxg",
  authDomain: "react-chat-wi23b.firebaseapp.com",
  projectId: "react-chat-wi23b",
  storageBucket: "react-chat-wi23b.appspot.com",
  messagingSenderId: "485378977566",
  appId: "1:485378977566:web:4b68b997cd15ebf020a30f"
};

// Initialize Firebase
initializeApp(firebaseConfig); //hook up to the correct app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>    
);