import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "semantic-ui-react";
import { signInUser } from "../redux/actions/reduxTokenAuthConfig";


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    renderLoginForm: true,
    email: "",
    password: "",
    authenticated: false,
    message: ''
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

  // async onLogin(e) {
  //   e.preventDefault();
  //   let resp = await authenticate(this.state.email, this.state.password)
  //   if (resp.authenticated === true) {
  //     this.setState({ authenticated: true });
  //   } else {
  //     this.setState({ message: resp.message, renderLoginForm: false })
  //   }
  // }

  render() =>  
    return (
      <Container>
        {this.props.currentUser.isSignedIn
          ? `Hello ${this.props.currentUser.attributes.uid}!`
          : ""}

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

            <Button 
              id="login-form-submit" 
              type="submit"
              onClick={(e) => props.loginHandler(e)}>
              Login
            </Button>
          </Form>
        ) : (
          ""
        )}
      </Container>
    );
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.reduxTokenAuth.currentUser
  };
}
export default connect(
  mapStateToProps,
  { signInUser }
)(LoginForm);
