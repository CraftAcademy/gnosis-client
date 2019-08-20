import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import { signInUser } from "../redux/actions/reduxTokenAuthConfig";

export class LoginForm extends Component {
  state = {
    renderLoginForm: true,
    email: "",
    password: ""
  };

  loginHandler = e => {
    e.preventDefault();
    const { signInUser } = this.props;
    const { email, password } = this.state;
    signInUser({ email, password })
      .then(() => {
        this.setState({ renderLoginForm: false })
      })
      .catch(error => {
        console.log("error is", error);
      });
  };

  render() {
    let loginFields;
    let userGreeting;

    if (this.state.renderLoginForm === true) {
      loginFields = (
        <form id="login-form" onSubmit={this.loginHandler}>
          <input
            id="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            id="password"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input id="login-form-submit" value="Proceed" type="submit" />
        </form>
      );
    }

    if (this.props.currentUser.isSignedIn === true) {
      userGreeting = `Hello ${this.props.currentUser.attributes.uid}!`;
    }

    return (
      <>
        <Container>
          {userGreeting}
          {loginFields}
        </Container>

      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};
export default connect(
  mapStateToProps,
  { signInUser }
)(LoginForm);
