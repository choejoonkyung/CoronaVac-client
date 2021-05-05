import React from "react";
import { css } from "@emotion/react";
import { boxBorder } from "../../lib/styles/customs";

export type StatusBoardProps = {};

function StatusBoard({}: StatusBoardProps) {
  return <div css={statusBoardStyle}>dd</div>;
}

const statusBoardStyle = css`
  ${boxBorder}
`;

export default StatusBoard;
