import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App :)</h1>
        <Person name="Max" age="28" />
        <Person name="Tom" age="21">My Hobbies: Gamez</Person>
        <Person name="Ola" age="25" />
      </div> 
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
