import React, { Component } from 'react';
import Example from './Example';
class Events extends Component {
    state = {
        name: ''
    }

    clickHandler = (event) => {
        console.log(event.target);
    }

    inputHandler = (event) => {
        this.setState({
            name:event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className='container my-3'>
                    <input onChange={ this.inputHandler} value={this.state.name} type="text" placeholder="Enter Name:"/>
                    <button className="btn btn-primary" onClick={(event) => console.log(event)} >
                        Click Me
                    </button>
                        {this.state.name ? <p>Hello Mr {this.state.name}</p>: ''} 

                        <Example /> 
                        
                </div>

            </div>
        );
    }
}

export default Events;