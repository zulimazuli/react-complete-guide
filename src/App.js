import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 28 },
      {name: "Tom", age: 22 },
      {name: "Ola", age: 25 }
    ]
  }

  switchNamesHandler = (newName) => {
    this.setState({persons: [
      {name: newName, age: 28 },
      {name: "Tomasz", age: 29 },
      {name: "Aleksandra", age: 25 }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: 'Max', age: 28 },
      {name: event.target.value, age: 29 },
      {name: "Aleksandra", age: 25 }
    ]})
  }


  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App :)</h1>
        <button onClick={() => this.switchNamesHandler('Maximilian!!')}>Switch Names</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNamesHandler.bind(this, 'Max!')}
        changed={this.nameChangedHandler}>My Hobbies: Gamez</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
      </div> 
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work?'));
  }
}

export default App;
