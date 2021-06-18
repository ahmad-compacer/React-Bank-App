import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class LogoutViwe extends Component {
  render() {
    return (
        <Grid align="center">
        <h1>Thank you for using our Application </h1>
        <h3>You are logged out!</h3>
        <h3>Please login again to use our Application</h3>
        </Grid>
    );
  }
}

export default LogoutViwe;
