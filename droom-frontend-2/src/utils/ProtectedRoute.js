import React from "react";
import { Route, Redirect } from "react-router-dom";

//  This is an HOC that checks to see if the user is logged in, and sends them to the proper route if so, <Redirect to='/login' />

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let loggedIn = localStorage.getItem("token");
  console.log(loggedIn);

  return (
    <Route
      {...rest}
      render={() => {
        if (loggedIn !== undefined) {
          return <Component />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
