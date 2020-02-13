import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { getJobs } from "./Redux/actions/jobs";
import { getSeekers } from "./Redux/actions/seekers";

import ProtectedRoute from "./utils/ProtectedRoute";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/UserAuth/Register";
import SeekerMain from "./components/Main_UI/SeekerMain";
import CompanyMain from "./components/Main_UI/CompanyMain";
import SeekerMatch from "./components/Matches/SeekerMatch";
import CompanyMatch from "./components/Matches/CompanyMatch";
import FormikCompanyProfile from "./components/ProfilePages/CompanyProfile";
import FormikSeekerProfile from "./components/ProfilePages/SeekerProfile";
import Jobs from "./components/Additional/Jobs";
import NoMatch from "./components/Utility/NoMatch";

import "./styles/styles.css";

// This component is handling all of the Navigation and routing for the application. It's sole purpose is to set the URL paths and render components based upon URL input.
// The ProtectedRoute component handles client-side authentication via a JWT.

const Routes = props => {
  return (
    <div className="App">
      <Switch>
        <ProtectedRoute path="/seekerUI">
          <SeekerMain
            jobs={props.jobs}
            isLoading={props.isLoading}
            getJobs={props.getJobs}
          />
        </ProtectedRoute>

        <ProtectedRoute path="/companyUI">
          <CompanyMain
            seekers={props.seekers}
            isLoading={props.isLoading}
            getSeekers={props.getSeeekers}
          />
        </ProtectedRoute>

        <ProtectedRoute path="/company-matches">
          <CompanyMatch isLoading={props.isLoading} />
        </ProtectedRoute>

        <ProtectedRoute path="/seeker-matches">
          <SeekerMatch isLoading={props.isLoading} />
        </ProtectedRoute>

        <ProtectedRoute path="/company-profile">
          <FormikCompanyProfile isLoading={props.isLoading} />
        </ProtectedRoute>

        <ProtectedRoute path="/seeker-profile">
          <FormikSeekerProfile isLoading={props.isLoading} />
        </ProtectedRoute>

        <ProtectedRoute path="/jobs">
          <Jobs isLoading={props.isLoading} />
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
