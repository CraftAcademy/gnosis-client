import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import axios from "axios";

class UserProfile extends Component {
  state = {
    registrationKeys: [],
  };

  componentDidMount() {
    this.getUniKeys();
  }

  async getUniKeys() {
    const response = await axios.get(
      `/users/${this.props.currentUser.attributes.id}`
    );
    if (response) {
      this.setState({ registrationKeys: response.data })
    }
  }
  render() {
    let profileContent;
    let registrationKeysDisplay = this.state.registrationKeys.map(registrationKey => {
      return (
        <div key={registrationKey}>{registrationKey}</div>
      )
    })

    if (
      this.props.currentUser.attributes.role === "university" &&
      this.props.currentUser.attributes.subscriber === true
    ) {
      profileContent = (
        <div>
          <h1 id="registration-keys-title">Registration Keys:</h1>
          {registrationKeysDisplay}
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

export default connect(mapStateToProps)(UserProfile);
