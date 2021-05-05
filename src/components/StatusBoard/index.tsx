import React from "react";
import { css } from "@emotion/react";
import { boxBorder } from "../../lib/styles/customs";

export type StatusBoardProps = {
  sido: string;
};

function StatusBoard({ sido }: StatusBoardProps) {
  return <div css={statusBoardStyle}>{sido}</div>;
}

const statusBoardStyle = css`
  ${boxBorder}
`;

export default StatusBoard;
