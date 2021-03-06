import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import StylingSamples from "./containers/StylingSamples/StylingSamples";
import FormSamples from "./containers/FormSamples/FormSamples";
import Users from "./containers/Users/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/styling">
            <StylingSamples />
          </Route>
          <Route path="/forms">
            <FormSamples />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
