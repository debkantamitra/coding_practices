import React from "react";
import { NavLink, NavLinkRenderProps, Outlet } from "react-router-dom";

const Home = () => {
  const classNameHandler = ({
    isActive,
    isTransitioning,
    isPending,
  }: NavLinkRenderProps) =>
    [
      isActive ? "isActive" : "",
      isPending ? "isPending" : "",
      isTransitioning ? "isTransitioning" : "",
    ].join(" ");

  return (
    <div>
      <header>
        <NavLink to="login" className={classNameHandler}>
          Log In
        </NavLink>
        <NavLink to="sign-up" className={classNameHandler}>
          SingUp
        </NavLink>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
