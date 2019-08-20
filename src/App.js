import React from "react";
import CreateArticleForm from "./components/CreateArticleForm";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar.js";
import "./styling/App.css";
import "./styling/Navbar.css";
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
    </div>
  );
}

export default App;
