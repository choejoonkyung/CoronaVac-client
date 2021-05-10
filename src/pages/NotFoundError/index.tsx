import { css } from "@emotion/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export type NotFoundErrorProps = {};

function NotFoundError({}: NotFoundErrorProps) {
  return (
    <div css={non}>
      <Helmet>
        <title>CoronaVac - 404</title>
      </Helmet>
      <Link to="/">404 페이지를 찾을 수 없습니다.</Link>
    </div>
  );
}

const non = css`
  display: flex;
  justify-content: center;
  font-size: 2rem;
`;

export default NotFoundError;
