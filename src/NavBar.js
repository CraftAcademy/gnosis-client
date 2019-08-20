import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
  state = { activeItem: 'latest news' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className='page'>
        <Header id='header'>GNOSIS</Header>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/login-form">
            Log In
          </NavLink>
          <NavLink  to="/signup">
            Sign Up
          </NavLink>
          <NavLink to="/createarticle">
            Create Article
          </NavLink>

      </div>
    )
  }
}