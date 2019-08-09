import React from "react";

import "./spinner.css";

const Spinner = ({ fieldName, label, listContents, showError, onChange }) => (
  <div className={fieldName}>
    <label htmlFor={fieldName}>{label}</label>
    <select onChange={onChange}
            className={fieldName + (showError ? " error" : "")}
            name={fieldName}
            required>
      {listContents.map((item, index) => <option key={index} value={item.toLowerCase()}>{item}</option>)}
    </select>
  </div>
);

export default Spinner;
