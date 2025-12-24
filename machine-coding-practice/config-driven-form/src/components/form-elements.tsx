import React from "react";

const TextField = ({ label, isRequired, name, type, onChange }) => {
  return (
    <div className="inputContainer">
      <label htmlFor="name">
        {label} {isRequired && "*"}
      </label>

      <input type={type} name={name} onChange={onChange} />
    </div>
  );
};

export { TextField };
