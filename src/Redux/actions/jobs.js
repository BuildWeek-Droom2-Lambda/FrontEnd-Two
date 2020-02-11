import { axiosWithAuth } from "../../utils/axiosWithAuth";

//  action type variables for interacting with the API /jobs endpoint.
export const GET_JOBS_START = "GET_JOBS_START";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";

export const GET_JOB_BY_ID_START = "GET_JOB_BY_ID_START";
export const GET_JOB_BY_ID_SUCCESS = "GET_JOB_BY_ID_SUCCESS";

export const ADD_JOB_START = "ADD_JOB_START";
export const ADD_JOB_SUCCESS = "ADD_JOB_SUCCESS";

export const UPDATE_JOB_START = "UPDATE_JOB_START";
export const UPDATE_JOB_SUCCESS = "UPDATE_JOB_SUCCESS";

export const DELETE_JOB_START = "DELETE_JOB_START";
export const DELETE_JOB_SUCCESS = "DELETE_JOB_SUCCESS";

export const JOBS_FAILURE = "JOBS_FAILURE";

export const BASE_URL = "https://droom-node-server.herokuapp.com/api";

//  action creator for .get request. returns array of jobs.
export const getJobs = () => dispatch => {
  dispatch({
    type: GET_JOBS_START
  });
  axiosWithAuth()
    .get("/jobs")
    .then(res => {
      console.log("Result of API request for jobs array: ", res);
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: API did not respond: ", err);
      dispatch({
        type: JOBS_FAILURE,
        payload: err
      });
    });
};

//  action creator for getting a specific job by id. returns id, name, location, description, and company_id of the job
export const getJobsById = id => dispatch => {
  dispatch({
    type: GET_JOB_BY_ID_START
  });
  axiosWithAuth()
    .get(`/jobs/${id}`)
    .then(res => {
      console.log("Result of API request for jobs by ID: ", res);
      dispatch({
        type: GET_JOB_BY_ID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: could not get job by ID ", err);
      dispatch({
        type: JOBS_FAILURE,
        payload: err
      });
    });
};

//  action creator for .post request to create a new job. returns updated job array.
export const addJob = newJob => dispatch => {
  dispatch({
    type: ADD_JOB_START
  });
  axiosWithAuth()
    .post("/jobs", newJob)
    .then(res => {
      console.log("Result of POST request to API: ", res);
      dispatch({
        type: ADD_JOB_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: API did not recieve POST request.", err);
      dispatch({
        type: JOBS_FAILURE,
        payload: err
      });
    });
};

//  action creator for .put request to update a specific job. returns updated job object.
export const updateJob = (id, updateJob) => dispatch => {
  dispatch({
    type: UPDATE_JOB_START
  });
  axiosWithAuth()
    .put(`/jobs/${id}`, updateJob)
    .then(res => {
      console.log("This is the result of a put request to the API: ", res.data);
      dispatch({
        type: UPDATE_JOB_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not sent to API via PUT! ", err);
      dispatch({
        type: JOBS_FAILURE,
        payload: err.message
      });
    });
};

//  action creator for .delete request to delete a job. returns 1 if successful
export const deleteJob = id => dispatch => {
  dispatch({ type: DELETE_JOB_START, id });
  axiosWithAuth()
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("This is the result of a delete request to the API: ", res);
      dispatch({
        type: DELETE_JOB_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: Smurf not deleted! ", err.message);
      dispatch({
        type: JOBS_FAILURE,
        payload: err.message
      });
    });
};
