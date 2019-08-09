import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

import PrivateRoute from "./components/authentication/privateRoute";

import Login from "./screens/login";
import Quote from "./screens/quote";
import Plans from "./screens/plans";
import PageNotFound from "./screens/pageNotFound";

function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/quote" component={Quote}/>
          <PrivateRoute exact path="/plans" component={Plans}/>
          <Route exact path="/404" component={PageNotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
