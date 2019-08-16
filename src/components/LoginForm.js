import React, { Component } from "react";

export class LoginForm extends Component {
  state = {
    renderLoginForm: false,
    email: "",
    password: ""
  };

  handleLogin = () => {};

  render() {
    let login;

    if (this.state.renderLoginForm === true) {
      login = (
        <form id="login-form" onSubmit={this.handleLogin}>
          <input
            id="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            id="password"
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <input id="login-form-button" value="Login" type="submit" />
        </form>
      );
    }

    return (
      <div>
        <button
          id="login"
          onClick={() => this.setState({ renderLoginForm: true })}
        >
          Login
        </button>
        {login}
      </div>
    );
  }
}

export default LoginForm;
