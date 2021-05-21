import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderView from "./views/HeaderView";
import AccountsTableView from "./views/AccountsTableView";
import HomePageView from "./views/HomePageView";
import PutMoneyView from "./views/PutMoneyView";
import AddNewAccountView from "./views/AddNewAccountView";
import DeleteAccountView from "./views/DeleteAccountView";
import ErrorView from "./views/ErrorView";



class BankApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
         
            <HeaderView />
            
            <Switch>
              <Route path="/all" exact component={AccountsTableView} />
              <Route path="/home" exact component={HomePageView} />
              <Route path="/put" exact component={PutMoneyView} />
              <Route path="/post" exact component={AddNewAccountView} />
              <Route path="/delete" exact component={DeleteAccountView} />
              <Route component={ErrorView} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default BankApp;
