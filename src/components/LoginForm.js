import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";
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
        this.setState({ renderLoginForm: false });
      })
      .catch(error => {
        console.log("error is", error);
      });
  };


  render() {
    return (
      <Container>
        {this.props.currentUser.isSignedIn
          ? `Hello ${this.props.currentUser.attributes.uid}!`
          : ""}

        {!this.props.currentUser.isSignedIn ? (
          <Button
            id="login-button"
            onClick={() =>
              this.setState({
                renderLoginForm: !this.state.renderLoginForm
              })
            }
          >
            Login
          </Button>
        ) : (
            ""
          )}

        {this.state.renderLoginForm ? (
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
        ) : (
            ""
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
export default connect(
  mapStateToProps,
  { signInUser }
)(LoginForm);
