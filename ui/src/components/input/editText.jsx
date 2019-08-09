import React from "react";

import "./editText.css";

const EditText = ({ label, type, onChange }) =>
  <div className={"edit-text"}>
    <input type={type} onChange={onChange} required/>
    <span className="highlight"/>
    <span className="bar"/>
    <label>{label}</label>
  </div>;

export default EditText;
