import React from "react";
import reactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import "App.scss";

import Routes from "./Routes";
import { rootReducer } from "./components/Redux/reducers/index";

let store = createStore(rootReducer);

reactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
