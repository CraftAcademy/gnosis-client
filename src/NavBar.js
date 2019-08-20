import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';
import './styling/Navbar.css';

export default class NavBar extends Component {
  state = { activeItem: 'latest news' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div className='page'>
        <Menu secondary>
          <Header id='header'>GNOSIS</Header>
          <Menu.Menu position='left'></Menu.Menu>
            <Menu.Item as={NavLink} exact path to="/">Home</Menu.Item>
            <Menu.Item name='environment' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='medicine' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='outreach' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item>
            <Menu.Item as={NavLink} exact path to="/login-form">Log In</Menu.Item>
            <Menu.Item as={NavLink} exact path to="/signup">Sign Up</Menu.Item>
            <Menu.Item as={NavLink} exact path to="/createarticle">Create Article</Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}