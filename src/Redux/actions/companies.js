import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const GET_COMPANIES_START = "GET_COMPANIES_START";
export const GET_COMPANIES_SUCCESS = "GET_COMPANIES_START";

export const GET_COMPANY_BY_ID_START = "GET_JOBS_BY_ID_START";
export const GET_COMPANY_BY_ID_SUCCESS = "GET_JOBS_BY_ID_SUCCESS";

export const UPDATE_COMPANY_START = "UPDATE_COMPANY_START";
export const UPDATE_COMPANY_SUCCESS = "UPDATE_COMPANY_SUCCESS";

export const DELETE_COMPANY_START = "DELETE_COMPANY_START";
export const DELETE_COMPANY_SUCCESS = "DELETE_COMPANY_SUCCESS";

export const COMPANIES_FAILURE = "COMPANIES_FAILURE";

export const getCompany = () => dispatch => {
  dispatch({
    type: GET_COMPANIES_START
  });
  axiosWithAuth()
    .get("/companies")
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

export const getCompanyById = id => dispatch => {
  dispatch({
    type: GET_COMPANY_BY_ID_START,
    id
  });
  axiosWithAuth()
    .get(`/companies/${id}`)
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

export const updateCompany = (id, editCompany) => dispatch => {
  dispatch({
    type: UPDATE_COMPANY_START
  });
  axiosWithAuth()
    .put(`/companies/smurfs/${id}`, editCompany)
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

export const deleteCompany = id => dispatch => {
  dispatch({
    type: DELETE_COMPANY_START,
    id
  });
  axiosWithAuth()
    .delete(`http://localhost:3333/smurfs/${id}`)
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
