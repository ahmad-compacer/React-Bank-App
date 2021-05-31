import { FormControlLabel, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Component } from "react";
import axios from "axios";

class MatDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    };
  }

  loadAccounts() {
    const baseURL = process.env.REACT_APP_BASE_URL;
    let endpoint = baseURL + "/v1/accounts";
    axios.get(endpoint).then((res) => {
      const accounts = res.data;
      this.setState({ accounts });
    });
  }

  render() {
    const handleDeleteClick = (id, e) => {
      const baseURL = process.env.REACT_APP_BASE_URL;
      let deleteId = baseURL + "/v1/accounts" + { id };
      axios.delete(deleteId).then((res) => {
        console.log(res);
        console.log(res.data);
        const accounts = this.state.accounts.filter((item) => item.id !== id);
        this.setState({ accounts });
      });
    };
    return (
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleDeleteClick}
          >
            <Button variant="contained" color="secondary">
              Delete your account
            </Button>
          </IconButton>
        }
      />
    );
  }
}
export default MatDelete;
