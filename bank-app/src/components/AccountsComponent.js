import React, { Component } from "react";
import axios from "axios";
import AccountsTableView from "../views/AccountsTableView";
import CircularProgress from "@material-ui/core/CircularProgress";
//import CustomRowView from '../views/CustomRowView'

var rows = [];

export default class AccountsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
    };
  }

  componentDidMount(prevProps) {
    this.loadAccounts();
  }

  loadAccounts() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    let endpoint = baseURL + "/v1/accounts";
    axios
      .get(endpoint)
      .then((res) => {
        rows = res.data;
        this.setState({ dataLoaded: true });
      })
      .catch((res) => {
        if (res.status === undefined) {
          alert("Error");
        }
      });
  }
  render() {
    if (this.state.dataLoaded) {
      return <AccountsTableView items={rows} />;
    } else {
      const style = { textAlign: "center" };
      return (
        <div style={style}>
          <CircularProgress disableShrink />
        </div>
      );
    }
  }
}
