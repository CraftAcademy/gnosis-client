import React, { Component } from 'react';
import { connect } from "react-redux";

class UserProfile extends Component {
  state = {
    name: '',
    email: '',
    role: '',
  }

  render () {
    return (
      <h1>Your Profile</h1>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(
  mapStateToProps
)(UserProfile);
