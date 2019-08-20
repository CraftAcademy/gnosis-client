import React, { Component } from "react";
import PaymentForm from "./PaymentForm";
import { saveNewUser } from "../modules/saveNewUser";
import { Form, Button } from 'semantic-ui-react';

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
  };

  async saveNewUserHandler(e) {
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

  render() {
    let SignupFields;
    let SignupButton;
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
        <Form id="signup-form" onSubmit={e => this.saveNewUserHandler(e)}>
          <Form.Field>
          <label>Account Type</label>
          <select
            id="accountType"
            value={this.state.accountType}
            onChange={e => this.setState({ accountType: e.target.value })}
          >
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
          </Form.Field>

          <Form.Field>
          <label>University Name</label>
          <input
            id="name"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          </Form.Field>

          <Form.Field>
          <label>Email</label>
          <input
            id="email"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          </Form.Field>

          <Form.Field>
          <label>Password</label>
          <input
            id="password"
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          </Form.Field>

          <Form.Field>
          <label>Password Confirmation</label>
          <input
            id="password-confirmation"
            value={this.state.password_confirmation}
            onChange={e =>
              this.setState({ password_confirmation: e.target.value })
            }
          />
          </Form.Field>

          {this.state.accountType === "University" ?  <PaymentForm /> : ''}

          <Button id="submit-account-button" type="submit" >Sign Me Up!</ Button>
            {/* After extracting this component to its own page, remove below. . .we don't need to hide the form */}
          <Button
            onClick={() =>
              this.setState({
                renderSignupForm: false,
                renderSignupButton: true,
                accountType: ""
              })
            }
          >
            Return
          </ Button>
        </Form>
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
        {saveUserStatus}
        {SignupFields}
        {SignupButton}
      </div>
    );
  }
}

export default Signupform;
