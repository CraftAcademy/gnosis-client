import React, { Suspense } from "react";
import { withTranslation } from 'react-i18next'
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar.js";
import "./styling/Navbar.css";
import { Switch, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import Homepage from "./components/Homepage";
import PaymentForm from "./components/PaymentForm";


const App = () => {

  const TranslatedNavBar = withTranslation()(NavBar)
  return (
    <>
      <Suspense fallback={(<div>Loading</div>)}>
        <TranslatedNavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login-form" component={LoginForm} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/createarticle" component={CreateArticleForm} />
          <Route exact path="/payment" component={PaymentForm} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
