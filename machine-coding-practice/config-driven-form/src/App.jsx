import React from "react";
import Form from "./components/form";
import config from "./lib/config";
import "./App.css";

const App = () => {
  return (
    <Form
      config={config}
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
};

export default App;
