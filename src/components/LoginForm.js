import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from "../redux/actions/reduxTokenAuthConfig";

export class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      renderLoginForm: false,
      email: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    const { signInUser } = this.props;
    const { email, password } = this.state;
    signInUser({ email, password })
      .then(response => {
        console.log('response', response);
        this.props.history.push('/');
        debugger;
      })
      .catch(error => {
        console.log("error is", error);
      });
  };

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

// const mapStateToProps = state => {
//   return {
//     currentUser: state.reduxTokenAuth.currentUser
//   };
// };
export default connect(
  null,
  { signInUser }
)(LoginForm);
