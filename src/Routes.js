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
        <Route exact path="/">
          <LandingPage />
        </Route>

        <ProtectedRoute exact path="/seekerUI" component={SeekerMain} />

        <ProtectedRoute exact path="/companyUI" component={CompanyMain} />

        <ProtectedRoute
          exact
          path="/company-matches"
          component={CompanyMatch}
        />

        <ProtectedRoute exact path="/seeker-matches" component={SeekerMatch} />

        <ProtectedRoute
          exact
          path="/company-profile"
          component={FormikCompanyProfile}
        />

        <ProtectedRoute
          exact
          path="/seeker-profile"
          component={FormikSeekerProfile}
        />

        <ProtectedRoute exact path="/jobs" component={Jobs} />

        <Route exact path="/register">
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
