import { FormControlLabel, IconButton } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import EuroIcon from "@material-ui/icons/Delete";

const MatPut = ({put}) => {
  const handlePutClick = () => {
    // some action
  };

  return (
    <FormControlLabel
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handlePutClick}
        >
          <EuroIcon title="Put money" style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  );
};

export default MatPut;
