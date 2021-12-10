//1. Tiene que estar la variable React en scope
import React from 'react';

//2.Tiene que estar la variable ReactDOM en scope
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//3.Tengo que tener un elemento


//4. Tengo que renderizar el elemento. Este elemento toma dos parametro (a,b)
//a. es el elemento que mostras en pantalla
//b. es el elemento donde vas a mostrarlo
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
