import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Authentication from "./Authentication";

export default class AuthenticationPath extends Component {
  render() {
    if (Authentication.loggedin()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
