import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SeekerMatchesPage = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  console.log(savedJobs);

  useEffect(() => {
    const userID = localStorage.getItem("userid");
    axios
      .get(
        `https://droom-node-server.herokuapp.com/api/seekers/${userID}/saved`
      )

      .then(res => {
        console.log(res);
        setSavedJobs(res.data);
      })

      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = e => {
    let id = e.target.value;

    let updatedList = savedJobs.filter(job => job.job_id !== id);
    setSavedJobs(updatedList);

    const userID = localStorage.getItem("userid");
    axios
      .delete(
        `https://droom-node-server.herokuapp.com/api/seekers/${userID}/saved/${id}`
      )

      .then(res => {
        console.log(res);
      })

      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <div className="matches-page-container">
      <nav>
        <h3>Droom</h3>
        <div>
          <Link to="/seekerprofilepage">Profile</Link>
          <Link to="/seekermatchespage">Matches</Link>
          <Link to="/seekermainui">Home</Link>
        </div>
      </nav>

      <div className="seeker-matches-page">
        <h1>Your Saved Jobs</h1>
        <div className="jobs">
          {savedJobs.map(job => {
            return (
              <div key={job.job_id} className="job-card">
                <h1>{job.job_name}</h1>
                <h2>{job.job_location}</h2>
                <p>{job.job_description}</p>
                <div>
                  <button value={job.job_id} onClick={e => handleDelete(e)}>
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeekerMatchesPage;
