import React, { useState } from "react";
import FormField from "./form-filed";

const Form = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleFieldChange = (value, fieldName) => {};

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Config Driven Form</h1>

      <form onSubmit={handleFormSubmit}>
        {config.map((field) => {
          return (
            <FormField
              field={{ ...field, error: errors[field.name] }}
              value={formData[field.name]}
              onChange={handleFieldChange}
            />
          );
        })}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
