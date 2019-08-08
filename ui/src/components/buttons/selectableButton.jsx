import React from "react";

import "./button.css";
import "./selectableButton.css";

const SelectableButton = props => (
  <div className={"action btn selectable-button " + (props.selected ? "selected" : "unselected")}
       onClick={props.onClick}>
    {props.selected && <img width={"16px"} src={require("../../assets/images/valid.svg")} alt={"plan selected"}/>}
    <span/>
    {props.selected ? "Plan selected" : "Choose this plan"}
  </div>
);

export default SelectableButton;
