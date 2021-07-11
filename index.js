import React, { Component, useState } from "react";
import { render } from "react-dom";

import "./style.css";

import About from "./src/About";

import Symptoms from "./src/Symptoms";
import Statistics from "./src/Statistics";

import DisplayMapClass from "./src/DisplayMapClass";
import Trial from "./src/Trial";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const st = {
  padding: 2,
  boxShadow: "2px 2px 2px 2px grey",
  borderRadius: "10%",
  margin: "2vw"
};
const App = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <div className="mobile">
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link
          className="nav"
          to="/about"
          style={{ underline: "none" }}
          style={st}
        >
          About
        </Link>
        <Link
          className="nav"
          to="/statistics"
          style={{ underline: "none" }}
          style={st}
        >
          Statistics
        </Link>
      </nav>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/">
          <Redirect to="/statistics" />
        </Route>

        <Route path="/statistics" component={Statistics} />
      </Switch>
    </div>
  </HashRouter>
);
render(<App />, document.getElementById("root"));
