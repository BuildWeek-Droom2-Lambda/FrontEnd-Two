import React from "react";
import { Route, Redirect } from "react-router-dom";

//  This is an HOC that checks to see if the user is logged in, and sends them to the proper route if so, <Redirect to='/login' />

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default ProtectedRoute;
