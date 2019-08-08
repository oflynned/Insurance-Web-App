import React from "react";

import "./checkbox.css";

const Checkbox = ({ label }) =>
  <div className={"checkbox"}>
    <input type={"checkbox"} name={"checkbox"}/>
    <label htmlFor={"checkbox"}>{label}</label>
  </div>;

export default Checkbox;
