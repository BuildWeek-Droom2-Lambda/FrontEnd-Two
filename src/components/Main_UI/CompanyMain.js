import React, { useState, useEffect } from "react";
import Spinner from "../Utility/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSeekers } from "../../Redux/actions/seekers";

const CompanyMainUI = ({ seekers, getSeekers, isLoading }) => {
  useEffect(() => {
    getSeekers();
  }, []);

  const ID = localStorage.getItem("userid");

  return (
    <div className="main-ui-container">
      {!isLoading ? (
        <>
          <nav>
            <h3>Droom</h3>
            <div>
              <Link to="/companyprofilepage">Profile</Link>
              <Link to="/companymatchespage">Matches</Link>
              <Link to="/">Log Out</Link>
            </div>
          </nav>

          <div className="company-main-ui">
            <h1>Find Employees</h1>
            <div className="jobs">
              {seekers.map(seekers => {
                return (
                  <div key={seekers.id} className="job-card">
                    <h1>{seekers.name}</h1>
                    <h2>{seekers.location}</h2>
                    <div>
                      <button value={seekers.id}>X</button>
                      <button value={seekers.id}>Save</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    seekers: state.seekers,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { getSeekers })(CompanyMainUI);
