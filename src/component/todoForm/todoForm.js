import React, { Component } from 'react';
import './todoForm.css';

class TodoForm extends Component {

  render() {
      
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <div className="input-icon container">
            <i className="fa fa-list-ol icon" aria-hidden="true"></i>
            <input 
              type="text"
              placeholder="Add a Task ..."
              autoComplete="off"
              value={this.props.newTodo}
              onChange={this.props.handleChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default TodoForm;