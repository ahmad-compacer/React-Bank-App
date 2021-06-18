import { FormControlLabel, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from 'axios'

const MatDelete = ({ getID }) => {

  const handleDeleteClick = () => {
    axios.delete(`http://192.168.233.128:8054/accounts/${getID}`)
    .then(res => {
      if(res.data !=null){
        console.log('account deledet successfully')
        alert('account deledet successfully');
        window.location.reload(true);
      }else{
        alert('account not deledet')
      }
    })
    .catch((error) => {
      if (error.request){
        console.log('account not deledet')
        alert('account not deledet')
    }
  });
  };

  return (
    <FormControlLabel
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
        >
          <Button variant="contained" onClick={handleDeleteClick} color="secondary">
            Delete your account
          </Button>
        </IconButton>
      }
    />
  );
};

export default MatDelete;
