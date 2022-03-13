import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import avatar from "./components/avatar.png";


ReactDOM.render(
  <React.StrictMode>
    <div className="textbox">
  <h2  className="alignleft"> Welcome </h2>
 <img src={avatar} alt="avatar" className="avatar" ></img>
</div>

    <App />
  </React.StrictMode>,
  document.getElementById("root")
);