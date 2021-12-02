import ReactDOM from "react-dom";
import React from 'react';
import {MyContextProvider} from './MyContext';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <MyContextProvider>
    <App/>
  </MyContextProvider>,
  document.getElementById('root')
);

reportWebVitals();