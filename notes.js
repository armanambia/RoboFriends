// ----------------------------------- 221 Switch from functional app.js to class
// you will basically only change app.js and index.js

// original
function App() {
    
    return (
    <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
        </header>
    </div>
    );
    
}
// turns into this, need this import statement
// if you dont put file ending in import, it will automatically be js
// import App from './App';   == import App from './App.js';
import React from 'react';

class App extends React.Component {
    render(){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
  }

// can also import like this
import React, { Component } from 'react';

class Hello extends Component{}

// ----------------------------------- 224 First React Component

// if you use parantheses after return it evaluates ur html and then returns it
return (
    // use className instead of class if you export html in jsx
    // makes virtual dom work properly, class is reserved keyword
    <div className = 'f1 tc'>
        <h1> Hello World </h1>
        <p> xDDDDDDD</p>
    </div>
)


// React props, can send data to app
ReactDOM.render(
    //greeting is a react prop// it interacts with the Hello App
    <React.StrictMode>
      <Hello greeting={'Hello React ninja'}/>
    </React.StrictMode>,
    document.getElementById('root')
);
  

<div className = 'f1 tc'>
            <h1> Hello World </h1>
            <p> {this.props.greeting}</p>
        </div>


// essentially react apps are functions
const Hello = (props) =>{
    return ;
}