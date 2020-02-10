import React, { useState } from "react";

import { userRegister } from "../../Redux/actions/auth";

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

const Register = props => {
  const userTest = localStorage.getItem("username");

  let history = useHistory();

  const [message, setMessage] = useState();

  const [user, setUser] = useState({
    username: "",
    password: "",
    type: null
  });

  const handleChange = e => {
    e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, user) => {
    e.preventDefault();
    if (userTest === user.username) {
      setMessage("username already taken");
      setUser(null);
    } else {
      props.userRegister(user);
      localStorage.setItem("userID", user.id);
      history.push("/droom-list");
    }
  };

  return (
    <div className="auth-form-wrapper">
      <h1>Droom</h1>
      <h2>Find Your Droom Job!</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="username">Enter Username</label>
        <input
          name="username"
          type="text"
          value={user.name}
          placeholder={message}
          onChange={handleChange}
        ></input>

        <label htmlFor="password">Enter Password</label>
        <input
          name="password"
          type="text"
          value={user.password}
          placeholder="password"
          onChange={handleChange}
        ></input>

        <label htmlFor="type">Select User Type</label>
        <select
          name="type"
          value={user.type}
          className="select-dropdown"
          onChange={handleChange}
        >
          <option id="placeholder">Register As...</option>
          <option>seeker</option>
          <option>company</option>
        </select>

        <button onClick={handleSubmit} className="submit-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default connect(null, { userRegister })(Register);
