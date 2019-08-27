import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu } from "semantic-ui-react";
import { NavLink } from 'react-router-dom';
import { signOutUser } from "../redux/actions/reduxTokenAuthConfig";

class LogOut extends Component {

  signOut = (e) => {
  e.preventDefault();
  const { history, signOutUser } = this.props;
  signOutUser()
    .then(response => {
      history.push("/")
    //   this.props.dispatchFlash(
    //     `Welcome back!`,
    //       "success"
    //   );
    // })
    // .catch(error => {
    //   this.props.dispatchFlash(error.respose.data.error[0], "error")
    })
  };
 
  render() {
    const { signOut } = this
    return (
      <>
        <Menu.Item
          id="logout-button"
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
    dispatchFlash: (message, status) => ({
      type: "SHOW_FLASH_MESSAGE",
      payload: { flashMessage: message, status: status }
    }),
    signOutUser
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(LogOut);