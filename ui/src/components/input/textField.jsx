import React from "react";

import "./textField.css";

const TextField = ({ fieldName, label, type, descriptor, error, onChange }) => (
  <div className={"text-field " + fieldName}>
    <label htmlFor={fieldName}>{label}</label>
    <input className={fieldName} type={type} name={fieldName} onChange={onChange} required/>
    {descriptor && <span><p>{descriptor}</p></span>}
    {error && <h5 className={"error"}>{error}</h5>}
  </div>
);

export default TextField;
