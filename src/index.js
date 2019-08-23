import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import configureStore from "./redux/store/configureStore";
import axios from "axios";
import i18n from "./i18n";

let development = "http://localhost:3000/api/v0";
let production = "https://gnosis-api.herokuapp.com/api/v0";

axios.defaults.baseURL = production;

const store = configureStore();

window.store = store;

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </Router>,
  document.getElementById("root")
);