import React, {Component} from 'react';

class ErrorBoundary extends Componet {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }

    render() {
        if (this.state.hasError){
            return <h1>OOOps</h1>
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary