import React, { useEffect } from "react";
import Login from "../UserAuth/Login";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getJobs } from "../../Redux/actions/jobs";
import { getSeekers } from "../../Redux/actions/seekers";
import { getCompanies } from "../../Redux/actions/companies";
import { getSavedCompanies } from "../../Redux/actions/saved";

const LandingPage = ({
  jobs,
  seekers,
  companies,
  getJobs,
  getSeekers,
  getCompanies,
  getSavedCompanies
}) => {
  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    getSeekers();
  }, [jobs]);

  useEffect(() => {
    getCompanies();
  }, [seekers]);

  useEffect(() => {
    const ID = localStorage.getItem("userID");
    getSavedCompanies(ID);
  }, [companies]);
  return (
    <div className="landing-page">
      <h1>Droom</h1>
      <h2>Find Your Droom Job!</h2>
      <Login />
      <h4>Don't have an account? </h4>
      {/* <div className="links"> */}
      <Link to="/register">Sign Up</Link>
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jobs: state.jobs,
    seekers: state.seekers,
    companies: state.companies
  };
};

export default connect(mapStateToProps, {
  getJobs,
  getSeekers,
  getCompanies,
  getSavedCompanies
})(LandingPage);
