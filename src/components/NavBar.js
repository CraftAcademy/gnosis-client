import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Input, Grid } from 'semantic-ui-react';
import '../styling/Navbar.css';
import AlertMessage from './AlertMessage';
import { connect } from 'react-redux';

class NavBar extends Component {
  state = { activeItem: 'latest news' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let createArticleButton;
    let flashMessage;
    let loginActions;

    const { activeItem } = this.state

    if (this.props.showFlash === true) {
      flashMessage = <AlertMessage />
    }

    if (this.props.currentUser.attributes.role === "research_group_user") {
      createArticleButton = <Menu.Item id="create-article-button" as={NavLink} to="/createarticle">Create Article</Menu.Item>
    }

    if (this.props.currentUser.isSignedIn === false) {
      loginActions = (
        <>
          <Menu.Item as={NavLink} to="/login-form" id="login-button">Log In</Menu.Item>
          <Menu.Item as={NavLink} to="/signup">Sign Up</Menu.Item>
        </>
      )

    }
    return (
      <>
        <div className="ui stackable menu">
          <Container>
            <Menu.Item className="header logo" to="/">
              GNOSIS
            </Menu.Item>
            <Menu.Item as={NavLink} to="/">Home</Menu.Item>
            <div className="ui simple dropdown item">
              Categories <i className="dropdown icon"></i>
              <Menu secondary id="navbar">
                <Menu.Item name='environment' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='medicine' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='outreach' active={activeItem === 'home'} onClick={this.handleItemClick} />
              </Menu>
            </div>
            <Menu.Menu position='right'>
              <Menu.Item><Input icon='search' placeholder='Search...' /></Menu.Item>
              {createArticleButton}

              {loginActions}
            </Menu.Menu>
          </Container>
        </div>
        <Container>
          {flashMessage}
        </Container>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
    showFlash: state.flashes.showFlash
  };
};
export default connect(mapStateToProps)(NavBar);