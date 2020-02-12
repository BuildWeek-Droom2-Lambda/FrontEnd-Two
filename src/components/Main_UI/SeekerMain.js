import React, { useEffect } from "react";
import Spinner from "../Utility/Spinner";

import { Link } from "react-router-dom";

const SeekerMain = props => {
  useEffect(() => {
    props.getJobs();
  }, []);

  return (
    <div className="main-ui-container">
      {!props.isLoading ? (
        <>
          <nav>
            <h3>Droom</h3>
            <div>
              <Link to="/seekerprofilepage">Profile</Link>
              <Link to="/seekermatchespage">Matches</Link>
              <Link to="/seekermainui">Home</Link>
            </div>
          </nav>

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
