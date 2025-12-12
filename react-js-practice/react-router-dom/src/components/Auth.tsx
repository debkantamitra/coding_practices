import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Auth = ({ children }: Props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (Boolean(isLoggedIn)) {
    return children;
  } else {
    return <Navigate to={"/auth/sign-up"} />;
  }
};

export default Auth;
