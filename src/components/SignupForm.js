import React, { Component } from "react";
import PaymentForm from "./PaymentForm";
import { saveNewUser } from "../modules/saveNewUser";

export class Signupform extends Component {
  state = {
    renderSignupForm: false,
    renderSignupButton: true,
    accountType: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    userSaved: false,
    errorMessage: "",
    errors: {}
  };

  async saveNewUserHandler(e) {
    // if (!this.formIsValid()) return;
    e.preventDefault();
    let response = await saveNewUser(
      this.state.name,
      this.state.email,
      this.state.password,
      this.state.password_confirmation,
      this.state.accountType
    );
    if (response.status === 200) {
      this.setState({
        userSaved: true,
        renderSignupForm: false
      });
    } else {
      this.setState({
        
        errorMessage: response.data.body.message
       
      });
      
    }
  }

  // formIsValid = () => {
  //   const _errors = {};

  //   if (!this.state.accountType) _errors.accountType = "Account type required!";
  //   if (!this.state.name) _errors.name = "University name required!";
  //   if (!this.state.email) _errors.email = "A valid email is required!";
  //   if (!this.state.password) _errors.password = "Please choose a password!";
  //   if (!this.state.password_confirmation)
  //     _errors.password_confirmation = "Password Confirmation doesn't match.";

  //   this.setState({ errors: _errors });
  //   // Form is valid if the 'errors' object has no properties
  //   return Object.keys(_errors).length === 0;
  // };

  render() {
    let SignupFields;
    let SignupButton;
    let PaymentFields;
    let saveUserStatus;

    if (this.state.userSaved === true) {
      saveUserStatus =
        "Payment successful! University Account successfully created!";
    } else if (
      this.state.userSaved === false &&
      this.state.errorMessage !== ""
    ) {
      saveUserStatus = this.state.errorMessage;
    }

    if (this.state.renderSignupForm === true) {
      SignupFields = (
        <form id="signup-form" onSubmit={e => this.saveNewUserHandler(e)}>
          <label />
          <select
            id="accountType"
            value={this.state.accountType}
            onChange={e => this.setState({ accountType: e.target.value })}
          >
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
            {this.state.errors.accountType && (
              <div style={{ fontColor: "red", fontStyle: "bold" }}>
                {this.state.errors.accountType}
              </div>
            )}
          </select>
          <label>University Name</label>
          <input
            id="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          {this.state.errors.name && (
            <div style={{ fontColor: "red", fontStyle: "bold" }}>
              {this.state.errors.name}
            </div>
          )}
          <label>Email</label>
          <input
            id="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          {this.state.errors.email && (
            <div style={{ fontColor: "red", fontStyle: "bold" }}>
              {this.state.errors.email}
            </div>
          )}
          <label>Password</label>
          <input
            id="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          {this.state.errors.password && (
            <div style={{ fontColor: "red", fontStyle: "bold" }}>
              {this.state.errors.password}
            </div>
          )}
          <label>Password Confirmation</label>
          <input
            id="password-confirmation"
            value={this.state.password_confirmation}
            onChange={e =>
              this.setState({ password_confirmation: e.target.value })
            }
          />
          {this.state.errors.password_confirmation && (
            <div style={{ fontColor: "red", fontStyle: "bold" }}>
              {this.state.errors.password_confirmation}
            </div>
          )}
          <input id="submit-account-button" value="signup" type="submit" />
          <button
            onClick={() =>
              this.setState({
                renderSignupForm: false,
                renderSignupButton: true,
                accountType: ""
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
      );
    }

    return (
      <div>
        {saveUserStatus}
        {SignupFields}
        {SignupButton}
        {PaymentFields}
      </div>
    );
  }
}

export default Signupform;
