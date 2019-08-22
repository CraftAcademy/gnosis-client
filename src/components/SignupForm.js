import React, { Component } from "react";
import PaymentForm from "./PaymentForm";
import { Container, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/reduxTokenAuthConfig"
import { isDebuggerStatement } from "@babel/types";

class Signupform extends Component {
  state = {
    renderSignupForm: true,
    role: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    userSaved: false
  };

  async saveNewUserHandler(e) {
    e.preventDefault();
    const { registerUser } = this.props;
    const {
      name,
      email,
      password,
      password_confirmation,
      role
    } = this.state;
    registerUser({
      name,
      email,
      password,
      password_confirmation,
      role
    })
      .then(() => {
        this.setState({
          userSaved: true,
          renderSignupForm: false
        });
      })
      .catch(error => {
        this.props.dispatchFlash(error)
      })
  }

  render() {
    let saveUserStatus;
    if (this.state.userSaved === true) {
      saveUserStatus =
        `Payment successful! Your ${this.state.role} account successfully created!`;
    } else if (
      this.state.userSaved === false &&
      this.state.errorMessage !== ""
    ) {
      saveUserStatus = this.state.errorMessage;
    }

    return (
      <Container>

        {this.state.renderSignupForm ? (
          <Form id="signup-form" onSubmit={e => this.saveNewUserHandler(e)}>
            <Form.Field>
              <label>Account Type</label>
              <select
                id="role"
                value={this.state.role}
                onChange={e => this.setState({ role: e.target.value })}
              >
                <option className="options" value="" disabled>
                  Choose Account. . .
                </option>
                <option className="options" value="university">
                  University
                </option>
                <option className="options" value="research_group">
                  Research Group
                </option>
                <option className="options" value="reader">
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
                type="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Form.Field>

            <Form.Field>
              <label>Password Confirmation</label>
              <input
                id="password-confirmation"
                type="password"
                value={this.state.password_confirmation}
                onChange={e =>
                  this.setState({ password_confirmation: e.target.value })
                }
              />
            </Form.Field>

            {/* {this.state.role === "university" ? <PaymentForm /> : ""} */}

            <Button id="submit-account-button" type="submit">
              Sign Me Up!
            </Button>
          </Form>
        ) : (
            ""
          )}
        {saveUserStatus}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
};

const mapDispatchToProps = {
  dispatchFlash: (error) => (
    { type: 'SHOW_FLASH_MESSAGE', payload: { flashMessage: error.response.data.message, status: 'error' } }
  ),
  registerUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signupform);