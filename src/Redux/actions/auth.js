import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

// action type variables for user registration and login
export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const USER_FAILURE = "USER_FAILURE";

// action creator for registering a user. Returns new user object - need to implement some type of logic for diff by user_type
export const userRegister = user => dispatch => {
  dispatch({
    type: USER_REGISTER_START
  });
  axiosWithAuth()
    .post("/register", user)
    .then(res => {
      console.log("Result of user registration: ", res);
      localStorage.setItem("token", res.data.token, user);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log("Registration-Error: ", err);
      dispatch({
        type: USER_FAILURE,
        payload: err
      });
    });
};

//  action creator for user login. returns user object along with a JSON Web Token
export const userLogin = user => dispatch => {
  dispatch({
    type: USER_LOGIN_START
  });
  axios
    .post("https://droom-node-server.herokuapp.com/api/login", user)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data.user,
        message: `SUCCESS! ${res.data.user} was returned`
      });
    })
    .catch(err => {
      console.log("ERROR: incorrect username/ password", err);
      dispatch({
        type: USER_FAILURE,
        payload: err,
        message: `ERROR: ${err} was returned`
      });
    });
};
