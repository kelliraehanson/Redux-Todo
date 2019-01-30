import React from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../actions';

class TodoTitle extends React.Component {
  state = {
    newTitleText: ''
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText);
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          name="newTitleText"
          value={this.state.newTitleText}
          onChange={this.handleChanges}
        />
		<br></br>
		<br></br>
        <button onClick={this.updateTitle}>UPDATE TITLE</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

export default connect(
  mapStateToProps,
  { updateTitle } 
)(TodoTitle);
