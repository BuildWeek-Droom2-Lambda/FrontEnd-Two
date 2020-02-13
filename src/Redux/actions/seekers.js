import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

export const GET_SEEKERS_START = "GET_SEEKERS_START";
export const GET_SEEKERS_SUCCESS = "GET_SEEKERS_SUCCESS";

export const GET_SEEKER_BY_ID_START = "GET_SEEKERS_BY_ID_START";
export const GET_SEEKER_BY_ID_SUCCESS = "GET_SEEKERS_BY_ID_SUCCESS";

export const UPDATE_SEEKER_START = "UPDATE_SEEKER_START";
export const UPDATE_SEEKER_SUCCESS = "UPDATE_SEEKER_SUCCESS";

export const DELETE_SEEKER_START = "DELETE_SEEKER_START";
export const DELETE_SEEKER_SUCCESS = "DELETE_SEEKER_SUCCESS";

export const SEEKER_FAILURE = "SEEKER_FAILURE";

export const BASE_URL = "https://droom-node-server.herokuapp.com/api";

export const getSeekers = () => dispatch => {
  dispatch({
    type: GET_SEEKERS_START
  });
  axios
    .get(`${BASE_URL}/seekers`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SEEKERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SEEKER_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

export const getSeekerById = ID => dispatch => {
  dispatch({
    type: GET_SEEKER_BY_ID_START,
    ID
  });
  axiosWithAuth()
    .get(`/seekers/${ID}`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SEEKER_BY_ID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SEEKER_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

export const updateSeeker = (ID, seeker) => dispatch => {
  dispatch({
    type: UPDATE_SEEKER_START,
    ID,
    seeker
  });
  axiosWithAuth()
    .put(`/seekers/${ID}`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: UPDATE_SEEKER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SEEKER_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

export const deleteSeeker = ID => dispatch => {
  dispatch({
    type: DELETE_SEEKER_START,
    ID
  });
  axiosWithAuth()
    .delete(`/seekers/${ID}`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: DELETE_SEEKER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SEEKER_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};
