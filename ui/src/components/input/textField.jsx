import React from "react";

import "./textField.css";

const TextField = ({ fieldName, label, type, descriptor, showError, onChange }) => (
  <div className={"text-field " + fieldName}>
    <label htmlFor={fieldName}>{label}</label>
    <input className={fieldName + (showError ? " error" : "")}
           type={type}
           name={fieldName}
           onChange={onChange} required/>
    {descriptor && <span><p className={showError ? "error" : ""}>{descriptor}</p></span>}
  </div>
);

export default TextField;
