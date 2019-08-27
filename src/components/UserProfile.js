import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import axios from "axios";

class UserProfile extends Component {
  state = {
    regKey1: "",
    regKey2: "",
    regKey3: "",
    regKey4: "",
    regKey5: ""
  };

  componentDidMount() {
    this.getUniKeys();
  }

  async getUniKeys() {
    const response = await axios.get(
      "/subscriptions",
      this.props.currentUser.attributes.uid
    );
    if (response) {
      let ourArray = response.data;
      function toArray(ourArray) {
        const result = [];
        for (const prop in ourArray) {
          const value = ourArray[prop];
          if (typeof value === "object") {
            result.push(toArray(value));
          } else {
            result.push(value);
          }
        }
        return result;
      }
      let allKeys = toArray(ourArray);

      this.setState({
        regKey1: allKeys[0],
        regKey2: allKeys[1],
        regKey3: allKeys[2],
        regKey4: allKeys[3],
        regKey5: allKeys[4]
      });
    }
  }
  render() {
    let profileContent;

    if (
      this.props.currentUser.attributes.role === "university" &&
      this.props.currentUser.attributes.subscriber === true
    ) {
      profileContent = (
        <div>
          <h1>Registration Keys:</h1>
          <div>{this.state.regKey1}</div>
          <div>{this.state.regKey2}</div>
          <div>{this.state.regKey3}</div>
          <div>{this.state.regKey4}</div>
          <div>{this.state.regKey5}</div>
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
