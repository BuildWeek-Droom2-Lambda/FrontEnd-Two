import React, { useEffect, useState } from "react";
import Spinner from "../Utility/Spinner";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getJobs } from "../../Redux/actions/jobs";
import {
  getSavedJobs,
  addSavedJob,
  deleteSavedJob
} from "../../Redux/actions/saved";

const SeekerMain = ({
  jobs,
  getJobs,
  isLoading,
  getSavedJobs,
  addSavedJob,
  deleteSavedJob
}) => {
  const [savedJob, setSavedJob] = useState();

  useEffect(() => {
    getJobs();
  }, []);

  const handleSave = (e, jobs) => {
    const ID = localStorage.getItem("userID");
    const id = e.target.value;
    jobs.filter(job => {
job = job.id !== id
        }
  

        setSavedJob(job);
        addSavedJob(ID, savedJob);
        }

    
    
  };

  const handleDelete = e => {
    e.preventDefualt();
    const ID = localStorage.getItem("userID");
    const id = e.target.value;

    deleteSavedJob(ID, id);
  };

  const handleClick = () => {
    const ID = localStorage.getItem("userID");
    getSavedJobs(ID);
  };

  return (
    <div className="main-ui-container">
      <nav>
        <h3>Droom</h3>
        <div className="main-ui-nav">
          <Link to="/seeker-profile" onClick={handleClick}>
            Profile
          </Link>
          <Link to="/seeker-matches" onClick={handleClick}>
            Matches
          </Link>
        </div>
      </nav>

      {!isLoading ? (
        <>
          <div className="main-ui">
            <h1>Find Jobs</h1>
            <div className="jobs">
              {jobs.map(job => {
                return (
                  <div key={job.id} className="job-card">
                    <h1>{job.name}</h1>
                    <h2>{job.location}</h2>
                    <p>{job.description}</p>
                    <div>
                      <button onClick={handleDelete}>X</button>
                      <button onClick={handleSave}>Save</button>
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
    jobs: state.jobs,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, {
  getJobs,
  getSavedJobs,
  addSavedJob,
  deleteSavedJob
})(SeekerMain);
