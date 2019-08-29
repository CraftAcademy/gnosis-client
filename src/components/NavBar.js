import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, Input } from "semantic-ui-react";
import "../styling/Navbar.css";
import AlertMessage from "./AlertMessage";
import { connect } from "react-redux";
import UpdateLanguage from './UpdateLanguage';
import i18n from "../i18n";

class NavBar extends Component {

  // constructor(props) {
  //   super(props)
    
  // }
  state = { activeItem: 'latest news', language: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  updateLanguageHandler(language) {
    this.setState({ language: language })
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.language !== this.state.language) {
      i18n.changeLanguage(nextState.language);
      return true
    }
    return false
  }

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
      createArticleButton = (
        <Menu.Item id="create-article-button" as={NavLink} to="/createarticle">
          {i18n.t('navbar:create_article')}
        </Menu.Item>
      );
    }

    if (
      this.props.currentUser.attributes.role === "university" &&
      this.props.currentUser.attributes.subscriber === false
    ) {
      subscribeButton = (
        <Menu.Item
          id="subscribe-button"
          as={NavLink}
          to="/payment"
        >
          {i18n.t('navbar:subscribe')}
        </Menu.Item>
      );
    }

    if (this.props.currentUser.isSignedIn === false) {
      loginActions = (
        <>
          <Menu.Item as={NavLink} to="/login-form" id="login-button">
            {i18n.t('navbar.login')}
          </Menu.Item>
          <Menu.Item as={NavLink} to="/signup" id="sign-up-button">
            {i18n.t('navbar.signup')}
          </Menu.Item>
        </>
      );
    }
    return (
      <>
        <div className="ui stackable menu">
          <Container>
            <Menu.Item className="header logo" to="/">
              GNOSIS
            </Menu.Item>
            <Menu.Item id="home-button" as={NavLink} to="/">
              {i18n.t('navbar.home')}
            </Menu.Item>
            <div className="ui simple dropdown item">
              {i18n.t('navbar.categories')} <i className="dropdown icon" />
              <Menu secondary id="navbar">
                <Menu.Item
                  name={i18n.t('navbar.environment')}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name={i18n.t('navbar.medicine')}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name={i18n.t('navbar.outreach')}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </div>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder={i18n.t('navbar:search')} />
              </Menu.Item>
              {createArticleButton}
              {subscribeButton}
              {loginActions}
              <UpdateLanguage updateLanguage={this.updateLanguageHandler.bind(this)} />
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
