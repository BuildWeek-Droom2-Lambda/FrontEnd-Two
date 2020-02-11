import axios from "axios";

// action type variables for user registration and login
export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";

export const GET_TOKEN_START = "GET_TOKEN_START";
export const GET_TOKEN_SUCCESS = "GET_TOKEN_SUCCESS";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const USER_FAILURE = "USER_FAILURE";

// action creator for registering a user. Returns new user object - need to implement some type of logic for diff by user_type

export const userRegister = newUser => dispatch => {
  dispatch({
    type: USER_REGISTER_START,
    payload: newUser
  });
  axios
    .post("https://droom-node-server.herokuapp.com/api/register", newUser)
    .then(res => {
      localStorage.setItem("userid", res.data.id);
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: res.data
      });
      console.log("Result of user registration: ", res.data);
    })
    .catch(err => {
      console.log("Registration-Error: ", err.message);
      dispatch({
        type: USER_FAILURE,
        payload: err.message
      });
    });
};

//  action creator for user login. returns user object along with a JSON Web Token
export const userLogin = newUser => dispatch => {
  dispatch({
    type: USER_LOGIN_START
  });
  axios
    .post("https://droom-node-server.herokuapp.com/api/login", newUser)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: res.data,
        message: `SUCCESS! ${res.data} was returned`
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
