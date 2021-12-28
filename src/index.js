import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// if you dont put file ending in import, it will automatically be js
// import App from './App';
import App from './App';
import reportWebVitals from './reportWebVitals';



// the package just installed
import 'tachyons';
// robots export is not default, so you have to destructure



ReactDOM.render( <App/>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
