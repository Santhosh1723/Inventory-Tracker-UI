import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//import LandingPage from "./landingpage/LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
