import React from "react";
import "./App.css";
import Interests from "./Interests/Interests.js";
import Homepage from "./Homepage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/interests" component={Interests} />
        </Switch>
      </div>
    </Router>
  );
}
