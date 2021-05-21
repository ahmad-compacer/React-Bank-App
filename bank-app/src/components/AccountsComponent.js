import React, { Component } from "react";
import axios from "axios";

export default class AccountsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      accounts: [] 
    };
  }

  componentDidMount(prevProps) {
    this.loadAccounts();
  }

  loadAccounts(){
    axios.get("http://192.168.233.128:8054/v1/accounts").then((res) => {
      this.setState({ accounts: res.data });
    });
  }

  render() {
    return (
      <div>
        {this.state.accounts.map((accounts) => (
          <div> {accounts.id} </div>
        ))}
      </div>
    );
  }
}
