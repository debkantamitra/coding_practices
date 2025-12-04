import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const AppLayout = () => {
  const navigate = useNavigation();
  const loading = navigate.state === "loading";

  return (
    <div>
      <h1>React Router Dom Tutorial</h1>
      <Header />
      {loading ? <div>Loading...</div> : null}
      <Outlet />
    </div>
  );
};

export default AppLayout;
