import React, { useState, useEffect } from "react";
import Spinner from "../Utility/Spinner";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSeekers } from "../../Redux/actions/seekers";

const CompanyMainUI = props => {
  const [seekers, setSeekers] = useState([]);
  const [savedSeeker, setSavedSeeker] = useState({
    seeker_id: null,
    seeker_name: "",
    seeker_location: ""
  });

  console.log(savedSeeker);
  console.log(seekers);

  useEffect(() => {
    props.getSeekers();
  }, []);

  const userID = localStorage.getItem("userid");

  const ClickHandler = e => {
    const seekerID = e.target.value;
    console.log(seekerID);
    const theSeeker = seekers[seekerID - 299];
    console.log(theSeeker);

    setSavedSeeker({
      seeker_id: theSeeker.id,
      seeker_name: theSeeker.name,
      seeker_location: theSeeker.location
    });

    // axios
    //   .post(
    //     `https://droom-node-server.herokuapp.com/api/companies/${userID}/saved`,
    //     savedSeeker
    //   )
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err.message);
    //   });
  };

  const handleDelete = e => {
    const id = e.target.value;
    const index = id - 1;
    const newSeekers = seekers.filter(seekers => {
      return seekers.id - 1 !== index;
    });
    setSeekers(newSeekers);
  };

  return (
    <div className="main-ui-container">
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

          <div className="company-main-ui">
            <h1>Find Employees</h1>
            <div className="jobs">
              {seekers.map(seekers => {
                return (
                  <div key={seekers.id} className="job-card">
                    <h1>{seekers.name}</h1>
                    <h2>{seekers.location}</h2>
                    <div>
                      <button value={seekers.id} onClick={e => handleDelete(e)}>
                        X
                      </button>
                      <button value={seekers.id} onClick={e => ClickHandler(e)}>
                        Save
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
    companies: state.companies,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { getSeekers })(CompanyMainUI);
