import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { getSavedSeekers, getSavedCompanies } from "../../Redux/actions/saved";
import { Link } from "react-router-dom";

const SeekerMatch = ({
  seekerMatches,
  companyMatches,
  getSavedSeekers,
  getSavedCompanies
}) => {
  // const [savedJobs, setSavedJobs] = useState([]);
  // console.log(savedJobs);

  useEffect(() => {
    const ID = localStorage.getItem("userID");
    getSavedCompanies(ID);
  }, []);

  // const handleDelete = e => {
  //   let id = e.target.value;

  //   let updatedList = savedJobs.filter(job => job.job_id !== id);
  //   setSavedJobs(updatedList);

  //   const userID = localStorage.getItem("userid");
  //   axios
  //     .delete(
  //       `https://droom-node-server.herokuapp.com/api/seekers/${userID}/saved/${id}`
  //     )

  //     .then(res => {
  //       console.log(res);
  //     })

  //     .catch(err => {
  //       console.log(err.message);
  //     });
  // };

  return (
    <div className="matches-page-container">
      <nav>
        <h3>Droom</h3>
        <div>
          <Link to="/seeker-profile">Profile</Link>
          <Link to="/seekerUI">Home</Link>
        </div>
      </nav>

      <div className="seeker-matches-page">
        <h1>Your Saved Jobs</h1>
        <div className="jobs">
          {seekerMatches.map(job => {
            return (
              <div key={job.job_id} className="job-card">
                <h1>{job.job_name}</h1>
                <h2>{job.job_location}</h2>
                <p>{job.job_description}</p>
                <div>
                  <button value={job.job_id}>X</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    seekerMatches: state.seekerMatches,
    companyMatches: state.companyMatches
  };
};

export default connect(mapStateToProps, { getSavedSeekers, getSavedCompanies })(
  SeekerMatch
);
