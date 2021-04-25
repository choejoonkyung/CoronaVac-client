import { css } from "@emotion/react";
import palette from "../../lib/styles/palette";
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

const boxStyle = css`
  background: ${palette.white};
  border: 0.0625rem solid rgba(70, 77, 82, 0.082);
  box-shadow: rgb(0 0 0 / 2%) -0.0625rem 0.0625rem 0.375rem;
  border-radius: 0.75rem;
`;

const logoStyle = css`
  ${boxStyle}
  display: flex;
  justify-content: center;
  padding: 0.625rem 0;
  margin-bottom: 1rem;
`;

const menuStyle = css`
  ${boxStyle}
  list-style: none;
  flex: 1;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

export default GNB;
