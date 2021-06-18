import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import MatDelete from "./DeleteAccountView";
import MatPut from "./PutMoneyView";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "iBan", headerName: "iBan", width: 250 },
  { field: "balance", headerName: "balance", width: 150 },
  { field: "€", headerName: "€", width: 5, 
  renderCell: () => { return (
    <div>
      €
    </div>
  )} },
  {field: "actions1", headerName: "Delete your account", sortable: false, width: 250, disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <div>
          <MatDelete getID={params.row.id} />
        </div>
      );
    },
},
  {field: "actions2", headerName: "Put money", sortable: false, width: 180, disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <div>
          <MatPut getID={params.row.id} />
        </div>
      );
    },
  }
];

export default function AccountsTableView({ items }) {
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid rows={items} columns={columns} pageSize={6} checkboxSelection />
    </div>
  );
}
