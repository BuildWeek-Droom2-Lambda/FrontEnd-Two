import { axiosWithAuth } from "../../utils/axiosWithAuth";

import {
  GET_SAVED_COMPANIES_START,
  GET_SAVED_SEEKERS_START,
  GET_SAVED_COMPANIES_SUCCESS,
  GET_SAVED_SEEKERS_SUCCESS,
  GET_SAVED_COMPANY_BY_ID_START,
  GET_SAVED_COMPANY_BY_ID_SUCCESS,
  GET_SAVED_SEEKER_BY_ID_START,
  GET_SAVED_SEEKER_BY_ID_SUCCESS,
  ADD_SAVED_START,
  ADD_SAVED_SUCCESS,
  DELETE_SAVED_COMPANY_START,
  DELETE_SAVED_COMPANY_SUCCESS,
  DELETE_SAVED_SEEKER_START,
  DELETE_SAVED_SEEKER_SUCCESS,S
  FAILURE
} from "./__action-types";

export const getSavedCompanies = () => dispatch => {
  dispatch({ type: GET_SAVED_COMPANIES_START });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)
    .then(dispatch({ isLoading: true }))
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_COMPANIES_SUCCESS,
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

export const getSavedSeekers = () => dispatch => {
  dispatch({ type: GET_SAVED_SEEKERS_START });
  axiosWithAuth()
    .get(`/seekers/${id}/saved`)
    .then(dispatch({ isLoading: true }))
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_SEEKERS_SUCCESS,
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

export const getSavedCompanyById = id => dispatch => {
  dispatch({ type: GET_SAVED_COMPANY_BY_ID_START });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)
    .then(dispatch({ isLoading: true }))
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_COMPANY_BY_ID_SUCCESS,
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

export const getSavedSeekerById = id => dispatch => {
  dispatch({ type: GET_SAVED_SEEKER_BY_ID_START });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)
    .then(dispatch({ isLoading: true }))
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_SAVED_SEEKER_BY_ID_SUCCESS,
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

export const addSaved = (id, newSave) => dispatch => {
  dispatch({ type: ADD_SAVED_START });
  axiosWithAuth()
    .get(`/companies/${id}/saved`)fss
    .then(dispatch({ isLoading: true }))
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: ADD_SAVED_SUCCESS,
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

export const deleteSavedCompany = id => dispatch => {
  dispatch({
    type: DELETE_COMPANY_START,
    isLoading: true
  });
  axiosWithAuth()
    .delete(`/companies/${id}/saved`)
    .then(dispatch({ isLoading: true }))
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: DELETE_COMPANY_SUCCESS,
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

export const deleteSavedSeeker = id => dispatch => {
  dispatch({
    type: DELETE_COMPANY_START,
    isLoading: true
  });
  axiosWithAuth()
    .delete(`/seekers/${id}/saved`)
    .then(dispatch({ isLoading: true }))
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: DELETE_COMPANY_SUCCESS,
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
