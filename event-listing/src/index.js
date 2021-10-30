import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App greetText="Hello, XSOLLA!" />
  </React.StrictMode>,
  document.getElementById("root")
);
