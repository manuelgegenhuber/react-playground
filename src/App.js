import React, { Component } from 'react';
import './App.css';
import './UserInput/UserInput.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

    state = {
        username: "Peter"
    }

    changeNameHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
            <div className = "App" >
                <h1 > Hello & welcome to the playground</h1>

                <UserOutput username={this.state.username}>Something</UserOutput> 

                <UserInput change={this.changeNameHandler} name={this.state.username}></UserInput>

                <UserOutput username="Denise">Somet text</UserOutput>
                <UserOutput username="Sebastian">Wohooo</UserOutput>
            </div>

        );
    }
}

export default App;