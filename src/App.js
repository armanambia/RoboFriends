import React, {Component} from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import {robots} from './robots'
import './App.css'


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
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1 className ='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
            
        )
    }
    
}

export default App;