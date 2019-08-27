import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import configureStore from "./redux/store/configureStore";
import axios from "axios";
import { verifyCredentials } from "./redux/actions/reduxTokenAuthConfig";
import { setupInterceptors } from "./modules/axiosInterceptor";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_PROD_API_URL
    : process.env.REACT_APP_DEV_API_URL;

const store = configureStore();
verifyCredentials(store);

setupInterceptors();

window.store = store;

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);