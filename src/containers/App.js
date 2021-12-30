import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from './ErrorBoundary'
import './App.css'


class App extends Component{
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users=> this.setState({robots:users}))
    }

    // we pass this function as an event handler
    // use the equal signs and arrow function syntax anytime you make your own function on react
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length?
            <h1>Loading</h1>:        
            (
                <div className = 'tc'>
                    <h1 className ='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>                    
                    </Scroll>                    
                </div>
                
            )
        
       
    }
    
}

export default App;