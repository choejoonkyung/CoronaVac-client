import { css } from "@emotion/react";
import palette from "../../lib/styles/palette";

export type GNBProps = {};

function GNB({}: GNBProps) {
  return <div css={gnbStyle}></div>;
}

const gnbStyle = css`
  height: 3.125rem;
  background-color: ${palette.black};
`;

export default GNB;
