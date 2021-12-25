import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// if you dont put file ending in import, it will automatically be js
// import App from './App';
import Hello from './Hello'
import reportWebVitals from './reportWebVitals';
// the package just installed
import 'tachyons';

ReactDOM.render(
  //greeting is a react prop// it interacts with the Hello App
  <React.StrictMode>
    <Hello greeting={'Hello React ninja'}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
