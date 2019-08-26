import React from "react";
import { IonApp, IonContent } from '@ionic/react'
import { Sidebar, Segment } from 'semantic-ui-react';

import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar.js";
import "./styling/Navbar.css";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Homepage from "./components/Homepage";
import PaymentForm from "./components/PaymentForm";
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

const App = () => {
  return (
    <>
      <IonApp>
        <IonContent>
          <NavBar />
          <Sidebar.Pushable as={Segment}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/login-form" component={LoginForm} />
              <Route exact path="/signup" component={SignupForm} />
              <Route exact path="/createarticle" component={CreateArticleForm} />
              <Route exact path="/payment" component={PaymentForm} />
            </Switch>
          </Sidebar.Pushable>
        </IonContent>
      </IonApp>
    </>
  );
}

export default App;
