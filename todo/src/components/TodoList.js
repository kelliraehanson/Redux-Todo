import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleTodo, deleteItem } from '../actions';

class TodoList extends React.Component {
  state = {
    newTodo: ''
  };

  handleChanges = e => {
    this.setState({ newTodo: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
  };

  toggleTodo = (e, index) => {
    e.preventDefault();
    this.props.toggleTodo(index)

  };

  render() {
    return (
      <>
        <div>
          {this.props.todos.map((todo, index) => (
            <h4 onClick={e => this.toggleTodo(e, index)} key={index}>
              {todo.thing}
            </h4>
          ))}
          {/* <Button>
          DELETE
          </Button> */}
        </div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChanges}
        />
        <br></br>
        <button onClick={this.addTodo}>ADD TODO</button>
      </>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo }
)(TodoList);
