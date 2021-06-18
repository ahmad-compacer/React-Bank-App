import { FormControlLabel, IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import axios from 'axios'

const MatPut = ({ getID }) => {

  const handlePutClick = () => {
    const enteredName = prompt('Please enter the amount you want to deposit into this account')
    let path = getID + "/" + enteredName;
    const baseURL = process.env.REACT_APP_BASE_URL;
    let endpoint = baseURL + "/v1/accounts/" + path;
    axios.put(endpoint)
    .then(res => {
      if(res.data !=null){
        alert('Done!');
        window.location.reload(true);
      }else{
        alert('Faild')
      }
    })
    .catch((error) => {
      if (error.request){
        alert('Faild')
    }
  });
  };

  return (
    <FormControlLabel
      control={
        <IconButton color="secondary" aria-label="add an alarm">
          <Button variant="contained" onClick={handlePutClick} color="primary">
            Put money
          </Button>
        </IconButton>
      }
    />
  );
};

export default MatPut;
