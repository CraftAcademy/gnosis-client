import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from "../redux/actions/reduxTokenAuthConfig";

export class LoginForm extends Component {
  state = {
    renderLoginForm: false,
    email: "",
    password: ""
  };

  loginHandler = e => {
    e.preventDefault();
    const { signInUser } = this.props;
    const { email, password } = this.state;
    signInUser({ email, password })
      .then(response => {
        console.log("response", response);
      })
      .catch(error => {
        console.log("error is", error);
      });
  };

  render() {
    let loginFields;
    let loginButton;
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
          <input id="login-form-submit" value="Login" type="submit" />
        </form>
      );
    }

    if (this.props.currentUser.isSignedIn === false) {
      loginButton = (
        <button
          id="login-button"
          onClick={() =>
            this.setState({
              renderLoginForm: !this.state.renderLoginForm
            })
          }
        >
          Login
        </button>
      );
    }

    if (this.props.currentUser.isSignedIn === true) {
      loginFields = "";
      userGreeting = `Hello ${this.props.currentUser.attributes.uid}!`;
    }

    return (
      <div>
        {userGreeting}
        {loginButton}
        {loginFields}
      </div>
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
