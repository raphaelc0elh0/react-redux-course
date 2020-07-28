import React, { Component } from 'react'

export default class AddTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  handleChange = (e) => {
    this.setState({ content: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Add new todo:</label>
          <input type="text" id="content" value={this.state.content} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}
