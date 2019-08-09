import React from "react";

import "./button.css";

const Button = props => (
  <div className={"action btn " + props.theme} onClick={props.onClick}>
    {props.children || props.label}
  </div>
);

export default Button;
