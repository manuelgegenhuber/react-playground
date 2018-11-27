import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <h1 > Hello & welcome to the playground</h1> 
            </div>
        );

        //behind the scene
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from behind the scene!'));
    }
}

export default App;