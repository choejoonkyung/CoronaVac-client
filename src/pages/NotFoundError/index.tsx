import React from "react";
import { Helmet } from "react-helmet-async";

export type NotFoundErrorProps = {};

function NotFoundError({}: NotFoundErrorProps) {
  return (
    <>
      <Helmet>
        <title>CoronaVac - 404</title>
      </Helmet>
      404
    </>
  );
}

export default NotFoundError;
