import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  ADD_JOBS_START,
  ADD_JOBS_SUCCESS,
  UPDATE_JOBS_START,
  UPDATE_JOBS_SUCCESS,
  DELETE_JOBS_START,
  DELETE_JOBS_SUCCESS,
  GET_COMPANIES_START,
  GET_COMPANIES_SUCCESS,
  ADD_COMPANIES_START,
  ADD_COMPANIES_SUCCESS,
  UPDATE_COMPANIES_START,
  UPDATE_COMPANIES_SUCCESS,
  DELETE_COMPANIES_START,
  DELETE_COMPANIES_SUCCESS,
  FAILURE
} from "../actions/companies";

export const initialState = {\

  users: {
    userType: {
      company: [
        {
          id: null,
          name: "",
          password: "",
          location: "",
          bio: ""
        }
      ],
      seeker: [
        {
          id: null,
          name: "",
          password: "",
          location: "",
          skills: "",
          experience: ""
        }
      ]
    }
  },

  jobs: [
    {
      name: "",
      location: "",
      description: "",
      salary: null,
      company_id: null,
      job_id: null 
    }
  ],

  isLoading: false,

  message: ""
  
};

export const rootReducer = (state = initialState, action) => {
  return initialState;
};
