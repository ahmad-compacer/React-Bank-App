import { FormControlLabel, IconButton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import DeleteIcon from "@material-ui/icons/Delete";


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
          <DeleteIcon  title="Delete your account" style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  );
};

export default MatDelete
