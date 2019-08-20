import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';
import '../styling/Navbar.css';
import AlertMessage from './AlertMessage';
import { connect } from 'react-redux';

class NavBar extends Component {
  state = { activeItem: 'latest news' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let createArticleButton;
    let flashMessage;
    let loginButton;

    const { activeItem } = this.state

    if (this.props.flashMessage === true) {
      flashMessage = <AlertMessage />
    }

    if (this.props.currentUser.attributes.role === "research_group_user") {
      createArticleButton = <Menu.Item as={NavLink} to="/createarticle">Create Article</Menu.Item>
    }

    if (this.props.currentUser.isSignedIn === true) {
      loginButton = <Menu.Item as={NavLink} to="/login-form" id="login-button">Log In</Menu.Item>
    }

    return (
      <div className='page'>
        <Menu secondary id="navbar">
          <Header id='header'>GNOSIS</Header>
          <Menu.Menu position='left'></Menu.Menu>
            <Menu.Item as={NavLink} to="/">Home</Menu.Item>
            <Menu.Item name='environment' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='medicine' active={activeItem === 'home'} onClick={this.handleItemClick} />
            <Menu.Item name='outreach' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item>
            <Menu.Item as={NavLink} to="/signup">Sign Up</Menu.Item>
            {createArticleButton}
            {flashMessage}
            {loginButton}
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
    flashMessage: state.flashMessage.flashMessage
  };
};
export default connect(mapStateToProps)(NavBar);