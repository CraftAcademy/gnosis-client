import React, { Component } from 'react';
import { createSecureContext } from 'tls';

class UserProfile extends Component {
  state = {
    name: '',
    email: '',
    role: '',
  }

  render () {
    return (
      <h1>User Profile Page</h1>
    )
  }
}


const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

export default connect(
  mapStateToProps,
  { currentUser }
)(UserProfile);
