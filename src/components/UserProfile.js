import React, { Component } from 'react';
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import axios from 'axios'

class UserProfile extends Component {
  state = {
    regKeys: ""
  };

  componentDidMount() {
    this.getUniKeys();
  }

  async getUniKeys() {
    const response = await axios.get(
      "/subscriptions",
      this.props.currentUser.attributes.uid
    );
    console.log(response);
    debugger
    if (response) {
      this.setState({
        regKeys: response.data.keys[0]
      });
    }
  }
  render() {
    let profileContent;

    if (this.props.currentUser.attributes.role === "university" &&
    this.props.currentUser.attributes.subscriber === true) {
      profileContent = (
        <div>
          <h1>Registration Keys:</h1>
          <div>{this.state.regKeys}</div>
        </div>
      );
    }
       
    return (
      <Container>
        <h1>Your Profile</h1>
        {profileContent}
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
