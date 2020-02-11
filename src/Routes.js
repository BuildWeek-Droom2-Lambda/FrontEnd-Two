import React from "react";

import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import SeekerMain from "./components/Main_UI/SeekerMain";
import CompanyMain from "./components/Main_UI/CompanyMain";
import ProtectedRoute from "./utils/ProtectedRoute";
import NoMatch from "./components/Utility/NoMatch";

import Register from "./components/UserAuth/Register";

import "./styles/styles.css";

// This component is handling all of the Navigation and routing for the application. It's sole purpose is to set the URL paths and render components based upon URL input.

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <ProtectedRoute exact path="/seekerUI" component={<SeekerMain />} />
        <ProtectedRoute exact path="/companyUI" component={<CompanyMain />} />

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Routes;
