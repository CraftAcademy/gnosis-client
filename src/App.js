import React from "react";
import { Container } from "semantic-ui-react";
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./NavBar.js";
import "./styling/App.css"
import "./styling/Navbar.css"
import { Switch, Route } from 'react-router-dom';
import SignupForm from "./components/SignupForm";
import Homepage from "./components/Homepage";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login-form" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/createarticle" component={CreateArticleForm} />
      </Switch>
      <LoginForm />
    </div>

  );
}

export default App;
