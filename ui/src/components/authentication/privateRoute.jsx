import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getKey } from "../../common/savedPrefs";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (!!getKey("username") && !!getKey("password")) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login"/>
      )
    }
  />
);

export default PrivateRoute;
