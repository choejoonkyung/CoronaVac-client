import React from "react";
import { css } from "@emotion/react";

export type StatusBoardProps = {
  sido: string;
};

function StatusBoard({ sido }: StatusBoardProps) {
  return <div css={statusBoardStyle}>{sido}</div>;
}

const statusBoardStyle = css``;

export default StatusBoard;
