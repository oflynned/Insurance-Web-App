import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import Login from "./screens/login";
import Plans from "./screens/plans";
import PageNotFound from "./screens/pageNotFound";

import "./App.css";
import Quote from "./screens/quote";

function App () {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/quote" component={Quote}/>
          <Route path="/plans" component={Plans}/>
          <Route path="/404" component={PageNotFound}/>
          <Redirect to="/404"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
