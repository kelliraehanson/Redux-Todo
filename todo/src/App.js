import React, { Component } from 'react';
import './App.css';

import TodoTitle from './components/TodoTitle';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };

  }

  render() {
    return (
      <div className="App">
      <img src="https://2.bp.blogspot.com/--JPrQ_gP7sU/Uz3GsKGXoRI/AAAAAAAAMzQ/xFKXCq0TAXM/s1600/header+leaf+design_0001+-+Copy+-+Copy.jpg"></img>
        <header className="App-header">
          <TodoTitle />
          <TodoList />
        </header>
      </div>
    );
  }
}

export default App;
