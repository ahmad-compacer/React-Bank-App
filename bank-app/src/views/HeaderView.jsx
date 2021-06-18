import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Authentication from "../components/Authentication";

export default class ButtonAppBar extends Component {
  render() {
    const loggedin = Authentication.loggedin();

    return (
      <div>
        <AppBar position="sticky">
          <Toolbar position="relative">
            {loggedin && (
              <Button raised color="inherit" position="fixed" href="home">
                Home
              </Button>
            )}
            {loggedin && (
              <Button raised color="inherit" position="fixed" href="all">
                All accounts
              </Button>
            )}
            {loggedin && (
              <Button raised color="inherit" position="fixed" href="post">
                Add new Account
              </Button>
            )}
            <hr />
            {!loggedin && (
              <Button raised color="inherit" position="fixed" href="login">
                Login
              </Button>
            )}
            {loggedin && (
              <Button
                color="inherit"
                onClick={Authentication.logout}
                href="logout"
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
