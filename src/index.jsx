import React from 'react';                // same as -> const React = require("react")
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(        //React DOM is the virtual DOM
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

