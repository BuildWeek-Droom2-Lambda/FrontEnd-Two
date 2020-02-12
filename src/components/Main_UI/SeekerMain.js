import React, { useEffect } from "react";
import Spinner from "../Utility/Spinner";

import { Link } from "react-router-dom";

const SeekerMain = props => {
  useEffect(() => {
    props.getJobs();
  }, []);

  return (
    <div className="main-ui-container">
      <nav>
        <h3>Droom</h3>
        <div className="main-ui-nav">
          <Link to="/seeker-profile">Profile</Link>
          <Link to="/seeker-matches">Matches</Link>
        </div>
      </nav>

      {!props.isLoading ? (
        <>
          <div className="main-ui">
            <h1>Find Jobs</h1>
            <div className="jobs">
              {props.jobs.map(job => {
                return (
                  <div key={job.id} className="job-card">
                    <h1>{job.name}</h1>
                    <h2>{job.location}</h2>
                    <p>{job.description}</p>
                    <div>
                      <button value={job.id}>X</button>
                      <button value={job.id}>Save</button>
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

export default SeekerMain;
