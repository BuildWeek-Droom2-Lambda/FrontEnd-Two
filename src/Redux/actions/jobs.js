import { axiosWithAuth } from '../../utils/axiosWithAuth'

import {
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  GET_JOBS_BY_ID_START,
  GET_JOBS_BY_ID_SUCCESS,
  ADD_JOB_START,
  ADD_JOB_SUCCESS,
  UPDATE_JOB_START,
  UPDATE_JOB_SUCCESS,
  DELETE_JOB_START,
  DELETE_JOB_SUCCESS,
  FAILURE
} from "./__action-types";

export const getJobs = () => dispatch {
    dispatch({ type: GET_JOBS_START });
    axiosWithAuth()
    .get('/jobs')
    .then(isLoading = true)
    .then(res => {
      console.log('Result of API request for jobs array: ', res);
      dispatch({ 
        type: GET_JOBS_SUCCESS, 
        payload: res.data, 
        isLoading = false,
        message: `SUCCESS! ${res.data.user} was returned`
    })
    })
    .catch(err => {
      console.log('ERROR: API did not respond: ', err)
      isLoading = false
    })
  }
  
  export const getJobsById = () => dispatch {
    dispatch({ type: GET_JOBS_BY_ID_START });
    axiosWithAuth()
    .get(`/jobs/${id}`)
    .then(isLoading = true)
    .then(res => {
      console.log('Result of API request for jobs by ID: ', res);
      dispatch({ type: GET_JOBS_BY_ID_SUCCESS, payload: res.data })
      isLoading = false
    })
    .catch(err => {
      console.log('ERROR: could not get job by ID ', err)
      isLoading = false
    })
  }

  export const addJob = newJob => dispatch => {
    dispatch({ type: ADD_JOB_START });
    axiosWithAuth()
      .post("/jobs", newJob)
      .then(isLoading = true)
      .then(res => {
        console.log("Result of POST request to API: ", res);
        dispatch({ type: ADD_JOB_SUCCESS, payload: res.data });
       isLoading = false
      })
      .catch(err => {
        console.log("ERROR: API did not recieve POST request.", err);
        dispatch({
          type: FAILURE,
          payload: err
        });
        isLoading = false
      });
  };

  export const updateJob = (id, updateJob) => dispatch => {
    dispatch({
      type: UPDATE_JOB_START
    });
    axios
      .put(`/jobs/${id}`, updateJob)
      .then(isLoading = true)
      .then(res => {
        console.log("This is the result of a put request to the API: ", res.data);
        dispatch({ type: UPDATE_JOB_SUCCESS, payload: res.data });
        isLoading = false
      })
      .catch(err => {
        console.log("ERROR: data not sent to API via PUT! ", err);
        dispatch({ type: FAILURE, payload: err.message });
        isLoading = false
      });
  };

  export const deleteJob = id => dispatch => {
    dispatch({ type: DELETE_JOB_START, id });
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(isLoading = true)
      .then(res => {
        console.log("This is the result of a delete request to the API: ", res);
        dispatch({ type: DELETE_JOB_SUCCESS, payload: res.data });
        isLoading = false
      })
      .catch(err => {
        console.log("ERROR: Smurf not deleted! ", err.message);
        dispatch({ type: FAILURE, payload: err.message });
        isLoading = false
      });
  };