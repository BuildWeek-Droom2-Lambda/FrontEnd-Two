import React, { useState } from "react";

import { userLogin } from "../../Redux/actions/auth";

import Spinner from "../Utility/Spinner";

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

const Login = ({ user, userLogin, isLoading }) => {
  let history = useHistory();

  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    password: "",
    type: ""
  });

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
    console.log("This is newUser in the Login.js handleChange: ", newUser);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("This is newUser in the Login.js handleSubmit: ", newUser);

    userLogin(newUser);
    history.replace(`/${newUser.type}UI`);
  };
  return (
    <div className="login-form-wrapper">
      {!isLoading ? (
        <form onSubmit={handleSubmit} className="auth-form">
          <label htmlFor="username">Enter Username</label>
          <input
            name="name"
            type="text"
            value={newUser.name}
            placeholder="username"
            onChange={handleChange}
          ></input>

          <label htmlFor="password">Enter Password</label>
          <input
            name="password"
            type="text"
            value={newUser.password}
            placeholder="password"
            onChange={handleChange}
          ></input>

          <label htmlFor="type">Select User Type</label>
          <select
            name="type"
            value={newUser.type}
            className="select-dropdown"
            onChange={handleChange}
          >
            <option id="placeholder">Login As...</option>
            <option>seeker</option>
            <option>company</option>
          </select>
          <button onClick={handleSubmit} className="submit-button">
            Log In
          </button>
        </form>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    user: state.user
  };
};

export default connect(mapStateToProps, { userLogin })(Login);
