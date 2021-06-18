import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";


class HomePageView extends Component {
  render() {
    return (
      <div>
        <Grid align="center">
          <h1>Welcome in our Application!</h1>
          <h2> Please choose an option from the list above</h2>
        </Grid>
      </div>
    );
  }
}
export default HomePageView;
