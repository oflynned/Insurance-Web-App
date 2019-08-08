import React from "react";

import "./switch.css";

const Switch = props => (
  <label className={"switch"}>
    <input type={"checkbox"} checked={props.checked} onChange={props.onChange}/>
    <span className={"slider round"}/>
  </label>
);

export default Switch;
