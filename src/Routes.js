import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { getJobs } from "./Redux/actions/jobs";
import { getSeekers } from "./Redux/actions/seekers";

import LandingPage from "./components/LandingPage/LandingPage";
import SeekerMain from "./components/Main_UI/SeekerMain";
import CompanyMain from "./components/Main_UI/CompanyMain";
import ProtectedRoute from "./utils/ProtectedRoute";
import NoMatch from "./components/Utility/NoMatch";

import Register from "./components/UserAuth/Register";

import "./styles/styles.css";

// This component is handling all of the Navigation and routing for the application. It's sole purpose is to set the URL paths and render components based upon URL input.

const Routes = props => {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute exact path="/seekerUI">
          <SeekerMain
            jobs={props.jobs}
            isLoading={props.isLoading}
            getJobs={props.getJobs}
          />
        </ProtectedRoute>
        <ProtectedRoute exact path="/companyUI">
          <CompanyMain
            seekers={props.seekers}
            isLoading={props.isLoading}
            getSeekers={props.getSeeekers}
          />
        </ProtectedRoute>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { getJobs, getSeekers })(Routes);
