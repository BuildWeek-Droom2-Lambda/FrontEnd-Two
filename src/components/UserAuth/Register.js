import React, { useState } from "react";

import { userRegister } from "../../Redux/actions/auth";

import { connect } from "react-redux";

import { useHistory, Link } from "react-router-dom";

const Register = props => {
  const history = useHistory();

  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
    type: ""
  });

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
    console.log(newUser);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.userRegister(newUser);
    console.log("User register @ Register.js: ", newUser);
    history.push("/");
  };

  // const checkPrevState = (newUser, prevUser) => {
  //   setPrevUser(props.user);
  //   if (prevUser.username === newUser.username) {
  //     setMessage("User already exists in database");
  //   } else if (prevUser.password === newUser.password) {
  //     setMessage("Password already exists in database");
  //   } else return handleSubmit(newUser);
  // = () => {
  //   checkPrevState();
  // };

  return (
    <div className="auth-form-wrapper">
      <h1>Droom</h1>
      <h2>Find Your Droom Job!</h2>
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
          <option id="placeholder">Register As...</option>
          <option>seeker</option>
          <option>company</option>
        </select>

        <button onClick={handleSubmit} className="submit-button">
          Sign Up
        </button>
        <Link to="/">Back to login</Link>
      </form>
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// };

export default connect(null, { userRegister })(Register);
