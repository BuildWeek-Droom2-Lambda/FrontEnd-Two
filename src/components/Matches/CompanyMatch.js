import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import Spinner from "../Utility/Spinner";

import { Link } from "react-router-dom";
import { getSavedSeekers, deleteSavedSeeker } from "../../Redux/actions/saved";

const CompanyMatch = ({
  isLoading,
  companyMatches,
  getSavedSeekers,
  deleteSavedSeeker
}) => {
  const [savedSeekers, setSavedSeekers] = useState([]);

  useEffect(() => {
    const ID = localStorage.getItem("userID");
    getSavedSeekers(ID);
  }, []);

  const handleDelete = e => {
    let ID = e.target.value;

    let updatedList = companyMatches.filter(
      companyMatches => companyMatches.id !== ID
    );
    setSavedSeekers(updatedList);

    const userID = localStorage.getItem("userID");

    deleteSavedSeeker(ID, userID);
  };

  return (
    <div className="matches-page-container">
      {!isLoading ? (
        <>
          <nav>
            <h3>Droom</h3>
            <div>
              <Link to="/company-profile">Profile</Link>
              <Link to="/company-matches">Matches</Link>
              <Link to="/companyUI">Home</Link>
            </div>
          </nav>

          <div className="matches-page">
            <h1>Your Saved Employees</h1>
            <div className="seekers">
              {savedSeekers.map(seekers => {
                return (
                  <div key={seekers.seekers_id} className="seeker-card">
                    <h1>{seekers.seekers_name}</h1>
                    <h2>{seekers.seekers_location}</h2>
                    <div>
                      <button
                        value={seekers.seekers_id}
                        onClick={e => handleDelete(e)}
                      >
                        X
                      </button>
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
    isLoading: state.isLoading,
    companyMatches: state.companyMatches
  };
};

export default connect(mapStateToProps, { getSavedSeekers, deleteSavedSeeker })(
  CompanyMatch
);
