import React from "react";
import { Switch, Route } from "react-router-dom";
import { IonApp, IonContent } from "@ionic/react";

import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar.js";
import SignupForm from "./components/SignupForm";
import Homepage from "./components/Homepage";
import PaymentForm from "./components/PaymentForm";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import UserProfile from "./components/UserProfile";

import "./styling/Navbar.css";

const App = () => {
  return (
    <>
      <IonApp>
        <IonContent>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login-form" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/createarticle" component={CreateArticleForm} />
            <Route exact path="/payment" component={PaymentForm} />
          </Switch>
        </IonContent>
      </IonApp>
    </>
  );
};

export default App;
