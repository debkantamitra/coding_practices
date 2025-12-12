import React from "react";
import { NavLink as Link, NavLinkRenderProps } from "react-router-dom";

const Header = () => {
  // having a separate function because this is being reused in both the links
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
    <header>
      <Link to="/auth" className={classNameHandler}>
        Home
      </Link>
      <Link to="/posts" className={classNameHandler}>
        Posts
      </Link>
      <Link to="/navigate" className={classNameHandler}>
        Navigate
      </Link>
    </header>
  );
};

export default Header;
