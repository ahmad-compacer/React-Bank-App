import { DataGrid } from "@material-ui/data-grid";
import React from "react";
import { FormControlLabel, IconButton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";


const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "iBan", headerName: "iBan", width: 400 },
  { field: "balance", headerName: "balance", width: 300 },

  {field: "actions", headerName: "Delete your account", sortable: false, width: 180, disableClickEventBubbling: true,
   renderCell: (params) => {
      return (
        <div>
          <MatDelete index={params.row.id} />
        </div>
      );
    },
  }
];
const MatDelete = ({ index }) => {
  const handleDeleteClick = () => {
    // some action
    
  };

  return (
    <FormControlLabel
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleDeleteClick}
        >
          <DeleteIcon  title="Put money" style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  );
};
export default function AccountsTableView({ items }) {
  return (
    <div style={{ height: 450, width: "100%" }}>
      <DataGrid rows={items} columns={columns} pageSize={6} checkboxSelection />
    </div>
  );
}
