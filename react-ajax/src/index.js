import React from 'react';
import ReactDOM from 'react-dom/client';

import 'whatwg-fetch';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './components/App.js';

// console.log("about to fetch")

// fetch('https://api.github.com/search/repositories?q=bootstrap&sort=stars')
//   .then(function (response) {
//     //console.log("received response from ", response.url);
//     return response.json(); //get json data out of envelope
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     //handles errors
//     console.log(error);
//   })


// console.log("request sent")

// async function getData() {

//   const response = await fetch('https://api.github.com/search/repositories?q=bootstrap&sort=stars')
//   const data = await response.json();
//   console.log(data)
// }



//render the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
