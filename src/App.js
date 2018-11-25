import React, { Component } from 'react';
import './App.css';
//impoerting person and using it as own tag!!
import Person from './Person/Person';
import Car from './Car/Car';

class App extends Component {
    render() {
        return (
            <div className = "App" >
                <h1 > Hello & welcome to the playground</h1> 
                <Person name="Dani" age="99"></Person>
                <Person name="Viktor" age="66">My Hobbies: Racing!</Person>
                <Person name="Mani" age="111"></Person>
                <Car model="Toyota" color="black" year="1992">Best Car ever!</Car>
            </div>
        );

        //behind the scene
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello from behind the scene!'));
    }
}

export default App;