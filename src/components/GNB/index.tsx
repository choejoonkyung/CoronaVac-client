import { css } from "@emotion/react";
import { useRouteMatch } from "react-router-dom";
import { boxBorder } from "../../lib/styles/custom";
import GNBItem from "./GNBItem";

export type GNBProps = {};

function GNB({}: GNBProps) {
  const match = useRouteMatch();
  return (
    <div css={gnbStyle}>
      <div css={logoStyle}>JoonKyung</div>
      <ul css={menuStyle}>
        <GNBItem icon="spinner" text="메인" to="/" />
        <GNBItem
          icon="spinner"
          text="test"
          to="/test"
          isActive={() => {
            return ["/test", "/test/:id"].includes(match.path);
          }}
        />
        <GNBItem icon="spinner" text="test2" to="/test2" />
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
