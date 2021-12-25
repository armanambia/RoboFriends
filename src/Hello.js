import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component{
    render(){
        // if you use parantheses after return it evaluates ur html and then returns it
        return (
        // use className instead of class if you export html in jsx
        // makes virtual dom work properly, class is reserved keyword
        <div className = 'f1 tc'>
            <h1> Hello World </h1>
            <p> {this.props.greeting}</p>
        </div>
        )
        
    }
}
export default Hello;