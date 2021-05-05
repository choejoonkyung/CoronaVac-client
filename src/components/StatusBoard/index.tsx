import React from "react";
import { css } from "@emotion/react";
import { boxBorder } from "../../lib/styles/customs";
import useStatisticsQuery from "../../lib/querys/useStatisticsQuery";
import LoadingSpinner from "../LoadingSpinner";

export type StatusBoardProps = {};

function StatusBoard({}: StatusBoardProps) {
  const { data, isLoading } = useStatisticsQuery({
    page: 1,
    perPage: 10,
  });
  if (isLoading) return <LoadingSpinner />;
  return <div css={statusBoardStyle}>{data?.data[0].sido}</div>;
}

const statusBoardStyle = css`
  ${boxBorder}
`;

export default StatusBoard;
