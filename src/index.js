import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./App";
import { Provider } from "react-redux";
import 'semantic-ui-css/semantic.min.css';
import configureStore from "./redux/store/configureStore";

const store = configureStore();

window.store = store

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>,
  </Router>,
  document.getElementById("root")
);


