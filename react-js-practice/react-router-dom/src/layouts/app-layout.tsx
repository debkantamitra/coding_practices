import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <header>React Router Dom Tutorial</header>
      {/* loading */}
      <Outlet />
    </div>
  );
};

export default AppLayout;
