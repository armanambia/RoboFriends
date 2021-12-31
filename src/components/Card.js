import React, {Component} from 'react';



class Card extends Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn: false}
    }

    handleClick = (event) => {
        this.setState({isToggleOn: !this.state.isToggleOn})
        console.log(this.state.isToggleOn)
    }

    render() {
        return (
            <div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' onClick = {this.handleClick} >
                <img src={`https://robohash.org/${this.props.id}?size=200x200`} alt="" />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.state.isToggleOn ? this.props.email : ''}</p>
                </div>
            </div>
        );
    }
}

export default Card;