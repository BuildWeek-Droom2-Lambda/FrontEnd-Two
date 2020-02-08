import { axiosWithAuth } from "../../utils/axiosWithAuth";

import {
  GET_SEEKERS_START,
  GET_SEEKERS_SUCCESS,
  GET_SEEKER_BY_ID_START,
  GET_SEEKER_BY_ID_SUCCESS,
  UPDATE_SEEKER_START,
  UPDATE_SEEKER_SUCCESS,
  DELETE_SEEKER_START,
  DELETE_SEEKER_SUCCESS,
  FAILURE
} from "./__action-types";

export const getSeeker = () => dispatch => {
  dispatch({
    type: GET_SEEKERS_START,
    isLoading: true
  });
  axiosWithAuth()
    .get("/companies")
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SEEKERS_SUCCESS,
        payload: res.data,
        isLoading: false
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: FAILURE,
        payload: `${err} ${err.response}`,
        isLoading: false
      });
    });
};

export const getSeekerById = id => dispatch => {
  dispatch({
    type: GET_SEEKER_BY_ID_START,
    isLoading: true,
    id
  });
  axiosWithAuth()
    .get(`/seekers/${id}`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SEEKER_BY_ID_SUCCESS,
        payload: res.data,
        isLoading: false
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: FAILURE,
        payload: `${err} ${err.response}`,
        isLoading: false
      });
    });
};

export const updateSeeker = (id, updateSeeker) => dispatch => {
  dispatch({
    type: UPDATE_SEEKER_START,
    isLoading: true,
    id,
    updateSeeker
  });
  axiosWithAuth()
    .put(`/seekers/${id}`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: UPDATE_SEEKER_SUCCESS,
        payload: res.data,
        isLoading: false
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: FAILURE,
        payload: `${err} ${err.response}`,
        isLoading: false
      });
    });
};

export const deleteSeeker = id => dispatch => {
  dispatch({
    type: DELETE_SEEKER_START,
    isLoading: true,
    id
  });
  axiosWithAuth()
    .delete(`/seekers/${id}`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: DELETE_SEEKER_SUCCESS,
        payload: res.data,
        isLoading: false
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: FAILURE,
        payload: `${err} ${err.response}`,
        isLoading: false
      });
    });
};
