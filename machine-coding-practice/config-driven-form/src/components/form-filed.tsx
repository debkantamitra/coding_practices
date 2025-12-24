import React from "react";

const componentMapping = {
  TEXT_FEILD: () => {},
};

const FormField = ({ field, onChange }) => {
  const Component = componentMapping[field.component];

  return <div>form-filed</div>;
};

export default FormField;
