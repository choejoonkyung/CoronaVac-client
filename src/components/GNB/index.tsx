import { css } from "@emotion/react";
import { boxBorder } from "../../lib/styles/custom";
import GNBItem from "./GNBItem";

export type GNBProps = {};

function GNB({}: GNBProps) {
  return (
    <div css={gnbStyle}>
      <div css={logoStyle}>joonkyung</div>
      <ul css={menuStyle}>
        <GNBItem icon="spinner" to="/" text="메인" />
        <GNBItem icon="spinner" to="/test" text="test" />
      </ul>
    </div>
  );
}

const gnbStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const logoStyle = css`
  ${boxBorder}
  display: flex;
  justify-content: center;
  padding: 0.625rem 0;
  margin-bottom: 1rem;
`;

const menuStyle = css`
  ${boxBorder}
  list-style: none;
  flex: 1;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

export default GNB;
