import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div>
      <h1>React Router Dom Tutorial</h1>
      <Header />
      {/* loading */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
