import React, { Component } from 'react';

class Counter extends Component {

        constructor(){
            super() 
            this.state={
                name:"D4rk3nc0d1ng",
                age:"28",
                weight:"58kg"
            }
        }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h1>{this.state.weight}</h1>
            </div>
        );
    }
}

export default Counter;
