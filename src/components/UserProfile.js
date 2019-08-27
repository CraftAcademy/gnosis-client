import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

class UserProfile extends Component {
  state = {
    name: '',
    email: '',
    role: '',
  }

  render () {
    return (
      <Container>
        <h1>Your Profile</h1>
      </Container>
    );
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
