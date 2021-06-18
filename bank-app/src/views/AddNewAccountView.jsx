import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

export default class PersonList extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      iBan: 0,
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeiBan = this.handleChangeiBan.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeiBan = (event) => {
    this.setState({ iBan: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const baseURL = process.env.REACT_APP_BASE_URL;
    let endpoint =
      baseURL + "/accounts/" + this.state.name + "/" + this.state.iBan;
    axios.post(endpoint).then((res) => {
      console.log(res.config);
      if (res.data != null) {
        console.log("account added successfully");
        alert("account added successfully");
        this.props.history.push(`/all`)
      }}).catch((error) => {
      if (error.request){
        console.log('account not deledet')
        alert('Account not added! please try again ')
        alert('Be careful, the iBan must be 22 numbers')
      }
    });
  };

  render() {
    return (
      <Grid align="center">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1>Please inter your name:</h1>
            <input type="text" name="name" pattern="^\*(\.\{0,2})?$" onChange={this.handleChangeName} />
          </label>
          <label>
            <h1>Please inter iBan:</h1>
            <input type="number" name="iBan" onChange={this.handleChangeiBan} />
          </label>
          <button type="submit">Add</button>
        </form>
      </Grid>
    );
  }
}
