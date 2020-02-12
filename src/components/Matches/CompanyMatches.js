import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import Spinner from "../Utility/Spinner";

import { Link } from "react-router-dom";
import axios from "axios";

const CompanyMatchesPage = props => {
  const [savedSeekers, setSavedSeekers] = useState([]);
  console.log(savedSeekers);

  useEffect(() => {
    const userID = localStorage.getItem("userid");
    axios
      .get(
        `https://droom-node-server.herokuapp.com/api/companies/${userID}/saved`
      )

      .then(res => {
        console.log(res);
        setSavedSeekers(res.data);
      })

      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = e => {
    let id = e.target.value;

    let updatedList = savedSeekers.filter(
      seekers => seekers.seekerss_id !== id
    );
    setSavedSeekers(updatedList);

    const userID = localStorage.getItem("userid");
    axios
      .delete(
        `https://droom-node-server.herokuapp.com/api/companies/${userID}/saved/${id}`
      )

      .then(res => {
        console.log(res);
      })

      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div className="company-matches-page-container">
      {!props.isLoading ? (
        <>
          <nav>
            <h3>Droom</h3>
            <div>
              <Link to="/companyprofilepage">Profile</Link>
              <Link to="/companymatchespage">Matches</Link>
              <Link to="/companymainui">Home</Link>
            </div>
          </nav>

          <div className="company-matches-page">
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

export default connect(mapStateToProps, null)(CompanyMatchesPage);
