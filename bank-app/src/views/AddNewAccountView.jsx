import React, { Component } from "react";
import axios from "axios";
//import { Input } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


class AddNewAccountView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      iBan: "",
    };
  }
  changHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post("http://192.168.233.128:8054/v1/accounts/", this.state.name,"/", this.state.iBan)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
  };

  render() {
    const { name, iBan } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <h3>Please inter your name</h3>
            <TextField
              id="standard-number"
              label="Name"
              type="text"
              onChange={this.changHandler}
            />
          </div>
          <div>
            <h3>inter iBan number </h3>
            <TextField
              id="standard-number"
              label="iBan"
              type="number"
              onChange={this.changHandler}
            />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}
export default AddNewAccountView;
