import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderView from "./views/HeaderView";
import AccountsComponent from "./components/AccountsComponent";
import HomePageView from "./views/HomePageView";
import AddNewAccountView from "./views/AddNewAccountView";
import ErrorView from "./views/ErrorView";
import LoginViwe from './views/LoginViwe'
import LogoutViwe from './views/LogoutViwe'
import AuAuthenticationPath from './components/AuthenticationPath'

class BankApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <HeaderView />

            <Switch>
              <Route path="/" exact component={LoginViwe} />  
              <Route path="/login" exact component={LoginViwe} />
              <AuAuthenticationPath path="/logout" exact component={LogoutViwe} />
              <AuAuthenticationPath path="/all" exact component={AccountsComponent} />
              <AuAuthenticationPath path="/home" exact component={HomePageView} />
              <AuAuthenticationPath path="/post" exact component={AddNewAccountView} />
              <Route component={ErrorView} />
            </Switch>
          </>
        </Router>
      </div>
    );
  }
}

export default BankApp;
