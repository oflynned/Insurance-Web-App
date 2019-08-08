import React from "react";

import "./editText.css";

const EditText = ({ label, type }) =>
  <div className={"edit-text"}>
    <input type={type} required/>
    <span className="highlight"/>
    <span className="bar"/>
    <label>{label}</label>
  </div>;

export default EditText;
