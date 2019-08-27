import React, { Component } from "react";
import PaymentForm from "./PaymentForm";
import { Container, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/reduxTokenAuthConfig";

class SignupForm extends Component {
  state = {
    renderSignupForm: true,
    role: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    userSaved: false,
    registration_key: ""
  };

  async saveNewUserHandler(e) {
    e.preventDefault();
    const { registerUser } = this.props;
    const {
      name,
      email,
      password,
      password_confirmation,
      role,
      registration_key
    } = this.state;
    registerUser({
      name,
      email,
      password,
      password_confirmation,
      role,
      registration_key
    })
      .then(() => {
        this.setState({
          userSaved: true,
          renderSignupForm: false
        });
        this.props.dispatchFlash(
          `Your ${this.state.role} account successfully created!`,
          "success"
        );
      })
      .catch(error => {
        this.props.dispatchFlash(error.response.data.errors[0], "error");
      });
  }

  render() {
    let saveUserStatus;
    let paymentForm;
    let universityWelcome;
    let userType;

    this.state.role === "university"
      ? (userType = "University Name")
      : this.state.role === "research_group"
      ? (userType = "Research Group Name")
      : this.state.role === "reader"
      ? (userType = "Name")
      : (userType = null);

    if (
      this.state.userSaved === true &&
      this.props.currentUser.attributes.role === "University"
    ) {
      universityWelcome = `Welcome to Gnosis! To obtain your Research Group account keys, please subscribe!`;
    } else if (
      this.state.userSaved === false &&
      this.state.errorMessage !== ""
    ) {
      saveUserStatus = this.state.errorMessage;
    }
    if (this.state.renderPaymentForm === true) {
      paymentForm = <PaymentForm />;
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
              <label id="userType">{userType}</label>
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
            {this.state.role === "research_group" ? (
              <Form.Field>
                <label>Registration Key</label>
                <input
                  id="registration-key"
                  value={this.state.registration_key}
                  onChange={e =>
                    this.setState({ registration_key: e.target.value })
                  }
                />
              </Form.Field>
            ) : (
              ""
            )}

            <Button id="submit-account-button" type="submit">
              Sign Me Up!
            </Button>
          </Form>
        ) : (
          ""
        )}
        {saveUserStatus}
        {paymentForm}
        {universityWelcome}
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
  dispatchFlash: (message, status) => ({
    type: "SHOW_FLASH_MESSAGE",
    payload: { flashMessage: message, status: status }
  }),
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
