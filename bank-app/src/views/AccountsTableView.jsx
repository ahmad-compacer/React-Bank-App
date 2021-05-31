import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import MatDelete from "./DeleteAccountView";
import MatPut from "./PutMoneyView";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "iBan", headerName: "iBan", width: 400 },
  { field: "balance", headerName: "balance", width: 300 },
  {field: "actions1", headerName: "Delete your account", sortable: false, width: 180, disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <div>
          <MatDelete index={params.row.id} />
        </div>
      );
    },
},
  {field: "actions2", headerName: "Put money", sortable: false, width: 180, disableClickEventBubbling: true,
    renderCell: (params) => {
      return (
        <div>
          <MatPut put={params.row.id} />
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
