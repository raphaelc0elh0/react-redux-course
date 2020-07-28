import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodoForm from './components/AddTodoForm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, content: 'buy some milk' },
        { id: 2, content: 'play mario kart' }
      ]
    }
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: todos })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({todos: todos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={todos} deleteTodo={this.deleteTodo} />
        <AddTodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}