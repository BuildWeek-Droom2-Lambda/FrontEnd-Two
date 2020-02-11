import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_FAILURE
} from "../actions/auth";

import {
  GET_COMPANIES_START,
  GET_COMPANIES_SUCCESS,
  UPDATE_COMPANY_START,
  UPDATE_COMPANY_SUCCESS,
  DELETE_COMPANY_START,
  DELETE_COMPANY_SUCCESS,
  COMPANIES_FAILURE
} from "../actions/companies";

import {
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  ADD_JOB_START,
  ADD_JOB_SUCCESS,
  UPDATE_JOB_START,
  UPDATE_JOB_SUCCESS,
  DELETE_JOB_START,
  DELETE_JOB_SUCCESS,
  JOBS_FAILURE
} from "../actions/jobs";

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
  DELETE_SAVED_SEEKER_SUCCESS,
  SAVED_FAILURE
} from "../actions/saved";

export const initialState = {
  user: null,

  companies: [],

  seekers: [],

  jobs: [],

  isLoading: false,

  isUpdating: false,

  message: ""
};

export const rootReducer = (state = initialState, action) => {
  console.log("From the Reducer: ", action.type, action.payload);

  switch (action.type) {
    case USER_REGISTER_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case USER_REGISTER_SUCCESS:
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false,
        user: action.payload.user
      };

    case USER_LOGIN_START:
      return {
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case USER_LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER LOGGED IN",
        isLoading: false,
        user: action.payload.user
      };

    case USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: `Error: ${action.payload.err}`
      };

    case GET_COMPANIES_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case GET_COMPANIES_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        companies: action.payload,
        isLoading: false
      };

    case UPDATE_COMPANY_START:
      return {
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case UPDATE_COMPANY_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER LOGGED IN",
        isLoading: false
      };

    case DELETE_COMPANY_START:
      return {
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case DELETE_COMPANY_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER LOGGED IN",
        isLoading: false
      };

    case COMPANIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: `Error: ${action.payload.err}`
      };

    case GET_JOBS_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case GET_JOBS_SUCCESS:
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        jobs: action.payload
      };

    case ADD_JOB_START:
      return {
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case ADD_JOB_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER LOGGED IN",
        isLoading: false
      };

    case UPDATE_JOB_START:
      return {
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case UPDATE_JOB_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER LOGGED IN",
        isLoading: false
      };

    case DELETE_JOB_START:
      return {
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case DELETE_JOB_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER LOGGED IN",
        isLoading: false
      };

    case JOBS_FAILURE:
      return {
        ...state,
        isLoading: false,
        message: `Error: ${action.payload.err}`
      };

    case GET_SAVED_COMPANIES_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case GET_SAVED_COMPANIES_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    case GET_SAVED_SEEKERS_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case GET_SAVED_SEEKERS_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    case GET_SAVED_COMPANY_BY_ID_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case GET_SAVED_COMPANY_BY_ID_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    case GET_SAVED_SEEKER_BY_ID_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case GET_SAVED_SEEKER_BY_ID_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    case ADD_SAVED_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case ADD_SAVED_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    case DELETE_SAVED_COMPANY_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case DELETE_SAVED_COMPANY_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    case DELETE_SAVED_SEEKER_START:
      return {
        ...state,
        message: "BEGINNING API CALL... ",
        isLoading: true
      };

    case DELETE_SAVED_SEEKER_SUCCESS:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    case SAVED_FAILURE:
      console.log(action.payload);
      return {
        message: "USER DATA RETRIEVED",
        isLoading: false
      };

    default:
      return state;
  }
};
