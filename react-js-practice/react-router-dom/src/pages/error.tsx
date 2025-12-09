import React from "react";
import { Link, useRouteError } from "react-router-dom";

interface Props {
  msg: string;
}

const Error = ({ msg }: Props) => {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>Something went wrong for {msg}!</h1>
      {/* @ts-ignore */}
      <p>{error.data || error.message}</p>

      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Error;
