import React, { Component } from "react";

export class Signupform extends Component {
  state = {
    renderSignupForm: false,
    renderSignupButton: true
  };
  render() {
    let SignupFields;
    let SignupButton;
    
    if (this.state.renderSignupForm === true) {
      SignupFields = (
        <form id="signup-form">
          <label />
          <select id="method">
            <option className="options" value="User">
              User
            </option>
            <option className="options" value="University">
              University
            </option>
          </select>
          <label>Email</label>
          <input id="email" />
          <label>Password</label>
          <input id="password" />
          <label>Password Confirmation</label>
          <input id="password-confirmation" />
          <input id="login-form-button" value="Login" type="submit" />
          <button onClick={() => this.setState({renderSignupForm: false, renderSignupButton: true  })}>Return</button>
        </form>

      );
    }

    if (this.state.renderSignupButton === true) {
      SignupButton = (
        <button
        id="sign-up"
          onClick={() =>
            this.setState({ renderSignupForm: true, renderSignupButton: false })
          }
        >
          Sign Up
        </button>
      );
    }

    return (
      <div>
        {SignupFields}
        {SignupButton}
      </div>
    );
  }
}

export default Signupform;
