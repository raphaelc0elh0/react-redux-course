import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Pokeball from "../pokeball.png";

export default class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ posts: response.data.slice(0, 10) })
      })
  }

  render() {
    const { posts } = this.state
    const postList = posts.length
      ?
      posts.map(post =>
        <div key={post.id} className="post card">
          <img src={Pokeball} alt="pokeball" />
          <div className="card-content">
            <Link to={`/${post.id}`}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      )
      : <div className="center">No posts yet!</div>

    return (
      <div className="home">
        <h4 className="center">Home Page</h4>
        {postList}
      </div>
    )
  }
}
