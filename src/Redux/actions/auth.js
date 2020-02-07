import axios from "axios";

import {
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  FAILURE
} from "./__action-types";


export const userRegister = () => dispatch {
    dispatch({ type: USER_REGISTER_START });
    axios
    .post('https://droom-node-server.herokuapp.com/api/auth/register', data)
    .then(res => {
      console.log('Result of user registration: ', res)
      localStorage.setItem("token", res.data.token);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('Registration-Error: ',err);
      dispatch({
        type: FAILURE,
        payload: err 
      })
    })
}

export const userLogin = () => dispatch {
  dispatch({ type: USER_LOGIN_START });
  axiosWithAuth()
  .post('auth/login', credentials)
  .then(res => {
    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: 
   res.data.user, message: `SUCCESS! ${res.data.user} was returned`
    })
  })
  .catch(err => {
    console.log('ERROR: incorrect username/ password', err)
    dispatch({
      type: FAILURE,
      payload: err,
      message: `ERROR: ${err} was returned`
    })
  })
}