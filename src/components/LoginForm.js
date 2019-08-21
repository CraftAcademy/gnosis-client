import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";
import { signInUser } from "../redux/actions/reduxTokenAuthConfig";

class LoginForm extends Component {
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
        this.setState({ renderLoginForm: false });
        this.props.dispatchFlash(`Hello ${this.props.currentUser.attributes.uid}!`)
      })
  };


  render() {
    return (
      <Container>
        {this.state.renderLoginForm && (
          <Form id="login-form" onSubmit={this.loginHandler}>
            <Form.Field>
              <label>Account E-Mail Address</label>
              <input
                id="email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </Form.Field>

            <Form.Field>
              <label>Password</label>
              <input
                id="password"
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Form.Field>

            <Button id="login-form-submit" type="submit">
              Login
            </Button>
          </Form>
        )}
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
  dispatchFlash: (message) => (
    { type: 'SHOW_FLASH_MESSAGE', payload: { flashMessage: message, status: 'success' } }
  ),
  signInUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
