import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    name: "",
    iBan: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const namePath = {
      name: this.state.name
    };
    const iBanPath = {
      iBan: "/"+ this.state.iBan
    };

    axios
      .post("http://192.168.233.128:8054/v1/accounts/", {namePath}, {iBanPath})
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Please inter your name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Please inter iBan:
            <input type="number" iBan="iBan" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
