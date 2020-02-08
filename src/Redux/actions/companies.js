import { axiosWithAuth } from "../../utils/axiosWithAuth";

import {
  GET_COMPANIES_START,
  GET_COMPANIES_SUCCESS,
  GET_COMPANY_BY_ID_START,
  GET_COMPANY_BY_ID_SUCCESS,
  UPDATE_COMPANY_START,
  UPDATE_COMPANY_SUCCESS,
  DELETE_COMPANY_START,
  DELETE_COMPANY_SUCCESS,
  FAILURE
} from "./__action-types";

export const getCompany = () => dispatch => {
  dispatch({ 
    type: GET_COMPANIES_START, 
    isLoading: true  
  });
  axiosWithAuth()
    .get("/companies")
    .then(res => {
      console.log("Result of GET request to API: ", res.data);
      dispatch({ 
        type: GET_COMPANIES_SUCCESS, 
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

export const getCompanyById = id => dispatch {
  dispatch({ 
    type: GET_COMPANY_BY_ID_START,
    id, 
    isLoading: true  
  });
  axiosWithAuth()
  .get(`/companies/${id}`)
  .then(res => {
    console.log('Result of GET company by ID: ', res.data)
    dispatch({ 
      type: GET_COMPANY_BY_ID_SUCCESS, 
      payload: res.data, 
      isLoading: false
    });
  })
  .catch(err => {
    console.log('ERROR: ', err);
    dispatch({
      type: FAILURE,
      payload: `${err} ${err.response}`,
      isLoading: false
    }); 
  });
};

export const updateCompany = (id, editCompany) => dispatch => {
  dispatch({
    type: UPDATE_COMPANY_START,
    isLoading: true 
  });
  axiosWithAuth()
    .put(`/companies/smurfs/${id}`, editCompany)
    .then(res => {
      console.log("This is the result of a put request to the API: ", res.data);
      dispatch({ type: UPDATE_COMPANY_SUCCESS, 
        payload: res.data, 
        isLoading: false
      });
    })
    .catch(err => {
      console.log("ERROR: data not sent to API via PUT! ", err);
      dispatch({ type: FAILURE, 
        payload: err.message, 
        isLoading: false
      });
    });
};

export const deleteCompany = id => dispatch => {
  dispatch({ 
    type: DELETE_COMPANY_START, 
    id, 
    isLoading: true 
  });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("This is the result of a delete request to the API: ", res);
      dispatch({ 
        type: DELETE_COMPANY_SUCCESS, 
        payload: res.data, 
        isLoading: true 
      });
    })
    .catch(err => {
      console.log("ERROR: Company not deleted! ", err.message);
      dispatch({ 
        type: FAILURE, 
        payload: err.message, 
        isLoading: false 
      });
    });
};