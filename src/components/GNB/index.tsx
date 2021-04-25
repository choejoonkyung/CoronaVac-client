import { css } from "@emotion/react";
import palette from "../../lib/styles/palette";

export type GNBProps = {};

function GNB({}: GNBProps) {
  return <div css={gnbStyle}></div>;
}

const gnbStyle = css`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.1rem;
  background-color: ${palette.black};
`;

export default GNB;
