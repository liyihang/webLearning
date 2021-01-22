import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/Login";
import Manage from "./pages/Manage";

export default class App extends React.Component {
  render() {
    return (
      <Router>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/home"></Redirect>}
          ></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Manage}></Route>
      </Router>
    );
  }
}
