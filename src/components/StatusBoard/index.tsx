import { css } from "@emotion/react";
import { boxBorder } from "../../lib/styles/customs";

export type StatusBoardProps = {};

function StatusBoard({}: StatusBoardProps) {
  return <div css={statusBoardStyle}>status board</div>;
}

const statusBoardStyle = css`
  ${boxBorder}
`;

export default StatusBoard;
