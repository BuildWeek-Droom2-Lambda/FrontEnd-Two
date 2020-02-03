import React from "react";
import reactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "App.css";

import Routes from "./Routes";

reactDOM.render(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);
