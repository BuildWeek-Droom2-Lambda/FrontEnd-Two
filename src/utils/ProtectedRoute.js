import React from "react";
import { Route, Redirect } from "react-router-dom";

//  This is an HOC that checks to see if the user is logged in, and sends them to the proper route if so, <Redirect to='/login' />

const ProtectedRoute = ({ component: Component, ...rest }) => {
  //  Retrieves bearer token from localStorage
  let loggedIn = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={() => {
        if (loggedIn !== undefined) {
          return <Component />;
          // Checks if token is present. If it is, protected component is rendered. If not, redirect to login screen.
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
export default ProtectedRoute;
