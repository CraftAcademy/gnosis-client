import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { signOutUser } from "../redux/actions/reduxTokenAuthConfig";

class LogOut extends Component {

  signOut = (e) => {
  e.preventDefault();
  const { history, signOutUser } = this.props;
  signOutUser()
    .then(response => {
      history.push("/");
      this.props.dispatchFlash(
        `You have successfully logged out.`,
      );
    })
  };
 
  render() {
    const { signOut } = this
    return (
      <>
        <Menu.Item
          id="logout-button"
          as={Link}
          to="/"
          onClick={signOut}
        >
          Log Out
        </Menu.Item>
      </>
    )
  }
  }

  const mapStateToProps = (state) => {
    return {
      state: state,
      currentUser: state.reduxTokenAuth.currentUser
    }
  }

  const mapDispatchToProps = {
    dispatchFlash: (message) => ({
      type: "SHOW_FLASH_MESSAGE",
      payload: { flashMessage: message }
    }),
    signOutUser
  };

  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LogOut));