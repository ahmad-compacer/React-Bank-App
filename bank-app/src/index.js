import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import BankApp from "./Router";
import reportWebVitals from "./reportWebVitals";
import "./assets/App.css";


ReactDOM.render(
  <React.StrictMode>
    <BankApp />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
