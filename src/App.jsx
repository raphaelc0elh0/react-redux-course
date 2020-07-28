import React, { Component, Fragment } from 'react'
import Form from './components/Form'
import List from './components/List'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ninjas: [
        { id: 1, name: 'Rodrigo', age: 45, belt: 'red' },
        { id: 2, name: 'Raphael', age: 26, belt: 'black' },
        { id: 3, name: 'Isabella', age: 21, belt: 'white' }
      ]
    }
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({ ninjas: ninjas });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => ninja.id !== id);
    this.setState({ ninjas: ninjas });
  }

  render() {
    const { ninjas } = this.state
    return (
      <Fragment>
        <List ninjas={ninjas} deleteNinja={this.deleteNinja} />
        <Form addNinja={this.addNinja} />
      </Fragment>
    )
  }
}