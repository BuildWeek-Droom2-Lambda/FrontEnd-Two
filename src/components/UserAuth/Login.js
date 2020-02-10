import React, { useState } from "react";

import { userLogin } from "../../Redux/actions/auth";

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";

const Login = props => {
  let history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
    type: ""
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
    props.userLogin(user);
    setInterval(() => {
      if (user) {
        history.push("/droom-list");
      }
    }, 1500);
    history.push("/droom-list");
  };

  return (
    <div className="auth-form-wrapper">
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="username">Enter Username</label>
        <input
          name="username"
          type="text"
          value={user.name}
          placeholder="username"
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

        <label htmlFor="type">Select Type</label>
        <select
          name="type"
          value={user.type}
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
    </div>
  );
};

export default connect(null, { userLogin })(Login);
