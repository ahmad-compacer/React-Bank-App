import React, { Component } from "react";
import AccountsComponent from '../components/AccountsComponent'

class HomePageView extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <AccountsComponent/> 
      </div>
    );
  }
}
export default HomePageView;
