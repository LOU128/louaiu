


import React from "react";
import ReactDOM from "react-dom";
import "grapesjs/dist/css/grapes.min.css";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import "bootstrap";
//import "./styles/main.scss";
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <BrowserRouter>
<App/>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();