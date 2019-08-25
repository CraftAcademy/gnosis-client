import React from "react";
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar.js";
import "./styling/Navbar.css";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Homepage from "./components/Homepage";
import PaymentForm from "./components/PaymentForm";
import { geolocated } from "react-geolocated";
import convertToDMS from "../src/modules/convertDMS";
import getAddress from '../src/modules/openCageWrapper'

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login-form" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/createarticle" component={CreateArticleForm} />
        <Route exact path="/payment" component={PaymentForm} />
      </Switch>
    </div>
  );
};

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(App);
