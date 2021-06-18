import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Authentication from "../components/Authentication.js";

class LoginViwe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Ahmad",
      password: "",
      loginFailed: false,
    };
    this.handelChange = this.handelChange.bind(this);
    this.loginclicked = this.loginclicked.bind(this);
  }

  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginclicked() {
    if (this.state.username === "Ahmad" && this.state.password === "123") {
      Authentication.loginSuccessfuly(this.state.username, this.state.password);
      this.props.history.push(`/home`);
      window.location.reload(true);
    } else {
      this.setState({ loginFailed: true });
    }
  }

  render() {
    return (
      <Grid align="center">
        <h1>Login</h1>
        <SchowFailesMessages loginFailed={this.state.loginFailed} />
        <form>
          <label>
            <h2>User name:</h2>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handelChange}
            />
            <h2>Password:</h2>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handelChange}
            />
          </label>
          <button onClick={this.loginclicked}>Login</button>
        </form>
      </Grid>
    );
  }
}

function SchowFailesMessages(props) {
  if (props.loginFailed) {
    return <h1>Not Loged in, please try again later </h1>;
  } else return null;
}
export default LoginViwe;
