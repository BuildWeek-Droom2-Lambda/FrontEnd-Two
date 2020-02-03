import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import DroomList from "./components/DroomList/DroomList";
import ProtectedRoute from "./Components/utils/ProtectedRoute";

import NoMatch from "./Components/NoMatch";

import { axiosWithAuth } from "./Components/utils/axiosWithAuth";

import "./App.css";

// This component is handling all of the Navigation and routing for the application. It's sole purpose is to set the URL paths and render components based upon URL input.

const Routes = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">FormikOnboarding</Route>
        <ProtectedRoute exact path="/droom-list" component={DroomList} />
        {/* <ProtectedRoute exact path='/matches' component={Matches} />  */}

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
export default Routes;
