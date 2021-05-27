import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from 'axios'
import CircularProgress from "@material-ui/core/CircularProgress";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "iBan", headerName: "iBan", width: 400 },
  { field: "balance", headerName: "balance", width: 300 },
];

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
    const {REACT_APP_BASE_URL}= process.env;

    axios.get ({REACT_APP_BASE_URL})
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
      return (
        <div style={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={6}
            checkboxSelection
          />
        </div>
      );
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

