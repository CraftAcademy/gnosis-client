import React from "react";
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar.js";
import "./styling/Navbar.css";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Homepage from "./components/Homepage";
import PaymentForm from "./components/PaymentForm";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login-form" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/createarticle" component={CreateArticleForm} />
        <Route exact path="/payment" component={PaymentForm} />
        <Route exact path="/profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
