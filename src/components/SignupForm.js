import React, { Component } from "react";
import PaymentForm from './PaymentForm'

export class Signupform extends Component {
  state = {
    renderSignupForm: false,
    renderSignupButton: true,
    accountType: ""
  };

  render() {
    let SignupFields;
    let SignupButton;
    let PaymentFields;

    if (this.state.renderSignupForm === true) {
      SignupFields = (
        <form id="signup-form">
          <label />
          <select id="accountType" value={this.state.accountType} onChange={e => this.setState({ accountType: e.target.value })}>
            Please select your account type:
            <option className="options" value="" disabled>
              Choose Account. . .
            </option>
            <option className="options" value="University">
              University
            </option>
            <option className="options" value="Research Group">
              Research Group
            </option>
            <option className="options" value="Reader">
              Reader
            </option>
          </select>
          <label>Name</label>
          <input id="email" />
          <label>Email</label>
          <input id="email" />
          <label>Password</label>
          <input id="password" />
          <label>Password Confirmation</label>
          <input id="password-confirmation" />
          <input id="submit-account-button" value="signup" type="submit" />
          <button
            onClick={() =>
              this.setState({
                renderSignupForm: false,
                renderSignupButton: true
              })
            }
          >
            Return
          </button>
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
    
    if (this.state.accountType === "University") {
      PaymentFields = (
        <>
          <PaymentForm />
        </>
      )
    }

    return (
      <div>
        {PaymentFields}
        {SignupFields}
        {SignupButton}
      </div>
    );
  }
}

export default Signupform;
