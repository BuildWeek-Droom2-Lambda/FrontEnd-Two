import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";

//  action type variables for companies API endpoint interaction
export const GET_COMPANIES_START = "GET_COMPANIES_START";
export const GET_COMPANIES_SUCCESS = "GET_COMPANIES_SUCCESS";

export const GET_COMPANY_BY_ID_START = "GET_JOBS_BY_ID_START";
export const GET_COMPANY_BY_ID_SUCCESS = "GET_JOBS_BY_ID_SUCCESS";

export const UPDATE_COMPANY_START = "UPDATE_COMPANY_START";
export const UPDATE_COMPANY_SUCCESS = "UPDATE_COMPANY_SUCCESS";

export const DELETE_COMPANY_START = "DELETE_COMPANY_START";
export const DELETE_COMPANY_SUCCESS = "DELETE_COMPANY_SUCCESS";

export const COMPANIES_FAILURE = "COMPANIES_FAILURE";

export const BASE_URL = "https://droom-node-server.herokuapp.com/api";

// action creator for .get request. Returns an array of companies
export const getCompanies = () => dispatch => {
  dispatch({
    type: GET_COMPANIES_START
  });
  axios
    .get(`${BASE_URL}/companies`)
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({
        type: GET_COMPANIES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not recieved from server ", err.response);
      dispatch({
        type: COMPANIES_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

//  action creator for getting a specific company by company_id. returns id, name, location, and bio of company
export const getCompanyById = ID => dispatch => {
  dispatch({
    type: GET_COMPANY_BY_ID_START,
    ID
  });
  axiosWithAuth()
    .get(`/companies/${ID}`)
    .then(res => {
      console.log("Result of GET company by ID: ", res.data);
      dispatch({
        type: GET_COMPANY_BY_ID_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: ", err);
      dispatch({
        type: COMPANIES_FAILURE,
        payload: `${err} ${err.response}`
      });
    });
};

//  action creator for .put request to update a company. returns id and name of updated company
export const updateCompany = (ID, values) => dispatch => {
  dispatch({
    type: UPDATE_COMPANY_START
  });
  axiosWithAuth()
    .put(`/companies/${ID}`, values)
    .then(res => {
      console.log("This is the result of a put request to the API: ", res.data);
      dispatch({
        type: UPDATE_COMPANY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: data not sent to API via PUT! ", err);
      dispatch({
        type: COMPANIES_FAILURE,
        payload: err.message
      });
    });
};

//  action creator for .delete request to remove a company from the database. returns 1 if successful.
//  WARNING: deleting a company also deletes all jobs associated with the company by company_id
export const deleteCompany = ID => dispatch => {
  dispatch({
    type: DELETE_COMPANY_START,
    ID
  });
  axiosWithAuth()
    .delete(`/companies/${ID}`)
    .then(res => {
      console.log("This is the result of a delete request to the API: ", res);
      dispatch({
        type: DELETE_COMPANY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("ERROR: Company not deleted! ", err.message);
      dispatch({
        type: COMPANIES_FAILURE,
        payload: err.message
      });
    });
};
