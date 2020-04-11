import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  // dinamic styling
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo; // destructuring
    return (
      <div style={this.getStyle()} className="todo-item">
        {/* <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
        {' '}  */}
        <div className="delete-btn" onClick={this.props.markComplete.bind(this, id)}>
          <span onClick={this.props.delTodo.bind(this, id)}><i className="fas fa-trash"></i></span>
          { title }
        </div>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

export default TodoItem


