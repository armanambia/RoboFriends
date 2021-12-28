// ********************************************************************************************************************************
// ----------------------------------- 221 Switch from functional app.js to class
// ********************************************************************************************************************************
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

// ********************************************************************************************************************************
// ----------------------------------- 224 First React Component
// ********************************************************************************************************************************

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


// ********************************************************************************************************************************
// ----------------------------------- 225 Building A React App 1
// ********************************************************************************************************************************

// default to no destructure
export default Card;
import Card from './Card'

// robots export is not default, so you have to destructure, can put multiple things in brackets
export const robots
import {robots} from './robots'


// ********************************************************************************************************************************
// ----------------------------------- 228 Building A React App 2
// ********************************************************************************************************************************

const cardsArray = robots.map((cur, i) => {
  // put a key property when looping to make it unique, helps with dom
  return <Card 
          key = {i} 
          id ={cur.id} 
          name = {cur.name} 
          email = {cur.email}
          />
})

// ********************************************************************************************************************************
// ----------------------------------- 228 Building A React App 3
// ********************************************************************************************************************************

// PROPS are passed down from parent to child, that property can be taken in and then used in a pure (dumb) funciton
// STATE allows components to change data and communicate with other components by going through their parent
// STATE >> PROPS, state defines the props
// to use state you have to create a class app, NOT create an arrow function, then export later

class App extends Component{
  constructor() {
      super();
      this.state = {
          robots: robots,
          searchfield: '',
      }
  }
  // we pass this function as an event handler
    // use the equal signs and arrow function syntax anytime you make your own function on react
    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
      const filteredRobots = this.state.robots.filter(robot =>{
          return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      })
      console.log(filteredRobots)
  }

  render(){
      return (
          <div className = 'tc'>
              <h1>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <CardList robots={this.state.robots}/>
          </div>
          
      )
  }
  
}

export default App;

// here the this.state holds the state