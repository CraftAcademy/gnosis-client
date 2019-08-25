import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Input } from 'semantic-ui-react';
import '../styling/Navbar.css';
import AlertMessage from './AlertMessage';
import { connect } from 'react-redux';
import convertToDMS from '../modules/convertDMS';
import getAddress from '../modules/openCageWrapper'


class NavBar extends Component {
  state = { activeItem: 'latest news', position: {}, city: ''  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({position: position}, () => {this.fetchAdress()})
    });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    let createArticleButton;
    let subscribeButton;
    let flashMessage;
    let loginActions;

    const { activeItem } = this.state

    if (this.props.showFlash === true) {
      flashMessage = <AlertMessage />
    }

    if (this.props.currentUser.attributes.role === "research_group") {
      createArticleButton = <Menu.Item id="create-article-button" as={NavLink} to="/createarticle">Create Article</Menu.Item>
    }

    if (
      this.props.currentUser.attributes.role === "University" &&
      this.props.currentUser.attributes.subscriber === false
    ) {
      subscribeButton = (
        <Menu.Item
          id="subscribe-button"
          as={NavLink}
          to="/payment"
        >
          Subscribe
        </Menu.Item>
      );
    }

    if (this.props.currentUser.isSignedIn === false) {
      loginActions = (
        <>
          <Menu.Item as={NavLink} to="/login-form" id="login-button">Log In</Menu.Item>
          <Menu.Item as={NavLink} to="/signup" id="sign-up-button">Sign Up</Menu.Item>
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
            <Menu.Item as={NavLink} to="/">
              Home
            </Menu.Item>
            <div className="ui simple dropdown item">
              Categories <i className="dropdown icon" />
              <Menu secondary id="navbar">
                <Menu.Item
                  name="environment"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="medicine"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="outreach"
                  active={activeItem === "home"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </div>
            <Menu.Item id="navbar-location">
                  <div>jibbrish</div>
              </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              {createArticleButton}
              {subscribeButton}
              {loginActions}
            </Menu.Menu>
          </Container>
        </div>
        <Container>{flashMessage}</Container>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser,
    showFlash: state.flashes.showFlash
  };
};
export default connect(mapStateToProps)(NavBar);