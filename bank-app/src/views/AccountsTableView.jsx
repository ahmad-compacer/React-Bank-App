import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import AccountsComponent from "../components/AccountsComponent.js";


const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "iBan", headerName: "iBan", width: 400 },
    { field: "balance", headerName: "balance", width: 300 },
  ];


  const rows = [
  ];
  
  export default class AccountsTableView extends Component {
    render(){
    return (
      <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    );
  }
  }