import { axiosWithAuth } from "../../utils/axiosWithAuth";

//  action type variables for saved matches API endpoint interaction
export const GET_SAVED_COMPANIES_START = "GET_SAVED_START";
export const GET_SAVED_COMPANIES_SUCCESS = "GET_SAVED_SUCCESS";

export const GET_SAVED_COMPANY_BY_ID_START = "GET_SAVED_BY_ID_START";
export const GET_SAVED_COMPANY_BY_ID_SUCCESS = "GET_SAVED_BY_ID_SUCCESS";

export const GET_SAVED_SEEKERS_START = "GET_SAVED_START";
export const GET_SAVED_SEEKERS_SUCCESS = "GET_SAVED_START";

export const GET_SAVED_SEEKER_BY_ID_START = "GET_SAVED_START";
export const GET_SAVED_SEEKER_BY_ID_SUCCESS = "GET_SAVED_START";

export const ADD_SAVED_START = "ADD_SAVED_START";
export const ADD_SAVED_SUCCESS = "ADD_SAVED_SUCCESS";

export const DELETE_SAVED_COMPANY_START = "DELETE_SAVED_START";
export const DELETE_SAVED_COMPANY_SUCCESS = "DELETE_SAVED_SUCCESS";

export const DELETE_SAVED_SEEKER_START = "DELETE_SAVED_START";
export const DELETE_SAVED_SEEKER_SUCCESS = "DELETE_SAVED_SUCCESS";

export const SAVED_FAILURE = "SAVED_FAILURE";

export const BASE_URL = "https://droom-node-server.herokuapp.com/api";

//  action creator for .get request to get the array of companies that have matched with a seeker
export const getSavedCompanies = id => dispatch => {
  dispatch({
    type: GET_SAVED_COMPANIES_START,
    id
  });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_COMPANIES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SAVED_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

// action creator for .get request to get the array of seekers that have matched with a company
export const getSavedSeekers = id => dispatch => {
  dispatch({
    type: GET_SAVED_SEEKERS_START,
    id
  });
  axiosWithAuth()
    .get(`/seekers/${id}/saved`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_SEEKERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SAVED_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

//  action creator to get a specific matched company by its company_id
export const getSavedCompanyById = id => dispatch => {
  dispatch({
    type: GET_SAVED_COMPANY_BY_ID_START
  });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_COMPANY_BY_ID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SAVED_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

//  action creator to get a specific seeker by its id
export const getSavedSeekerById = id => dispatch => {
  dispatch({
    type: GET_SAVED_SEEKER_BY_ID_START
  });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_SEEKER_BY_ID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SAVED_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

//  action creator to handle when a seeker and a job match. returns the job object.
export const addSaved = (id, newSave) => dispatch => {
  dispatch({
    type: ADD_SAVED_START,
    newSave,
    id
  });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: ADD_SAVED_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SAVED_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

export const deleteSavedCompany = id => dispatch => {
  dispatch({
    type: DELETE_SAVED_COMPANY_START,
    id
  });
  axiosWithAuth()
    .delete(`/companies/${id}/saved`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: DELETE_SAVED_COMPANY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SAVED_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

export const deleteSavedSeeker = id => dispatch => {
  dispatch({
    type: DELETE_SAVED_SEEKER_START
  });
  axiosWithAuth()
    .delete(`/seekers/${id}/saved`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: DELETE_SAVED_SEEKER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: SAVED_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};