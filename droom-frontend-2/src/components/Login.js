import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

const Login = props => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  // Using axios to send POST request to the server to retrieve JWT
  let history = useHistory();

  const login = e => {
    e.preventDefault();
    // Sending username/ password to server
    axios
      .post("http://localhost:5000/api/login", state)
      .then(res => {
        console.log("RESPONSE: ", res);
        localStorage.setItem("token", res.data.payload);
        setState({
          username: "",
          password: ""
        });
        history.replace("/protected");
      })
      .catch(
        err => console.log("ERROR: ", err.data),
        localStorage.removeItem("token"),
        history.push("/")
      );
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          placeholder="username"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;
