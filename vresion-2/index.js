import React, { Component, useState } from "react";
import { render } from "react-dom";

import "./style.css";



import Symptoms from "./Symptoms";
// import Statistics from "./Statistics";
import StateWise from './Statewise'
import About from "./About";
import News from "./News";
import Advice from "./Advice";
import DisplayMapClass from "./DisplayMapClass";
import Trial from "./Trial";
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
          to="/vaccine"
          style={{ underline: "none" }}
          style={st}
        >
          Vaccine Status
        </Link>
        <Link
          className="nav"
          to="/home"
          style={{ underline: "none" }}
          style={st}
        >
          Home
        </Link>
        <Link
          className="nav"
          to="/news"
          style={{ underline: "none" }}
          style={st}
        >
          News
        </Link>
        <Link
          className="nav"
          to="/expertAdvice"
          style={{ underline: "none" }}
          style={st}
        >
          Expert Advice
        </Link>
      </nav>
      <Switch>
        <Route path="/vaccine" component={About} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route path="/home" component={StateWise} />
        <Route path="/news" component={News} />
        <Route path="/expertAdvice" component={Advice} />
      </Switch>
    </div>
  </HashRouter>
);
render(<App />, document.getElementById("root"));
