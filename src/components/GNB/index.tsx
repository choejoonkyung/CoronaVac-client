import React from "react";
import { css } from "@emotion/react";
import { boxBorder, sectionHeaderStyle } from "../../lib/styles/customs";
import GNBItem from "./GNBItem";
import { fadeIn } from "../../lib/styles/animations";
import media from "../../lib/styles/media";

export type GNBProps = {};

function GNB({}: GNBProps) {
  return (
    <div css={gnbStyle}>
      <div css={logoStyle}>
        <img src="/logo.png" alt="logo" />
      </div>

      <nav>
        <h2 css={sectionHeaderStyle}>글로벌 네비게이션</h2>
        <ul css={menuStyle}>
          <GNBItem icon="chart" text="접종 통계" to="/" />
          <GNBItem icon="info" text="정보" to="/info" />
        </ul>
      </nav>
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

  img {
    animation: 0.5s ${fadeIn} ease-in;
    height: 2.5rem;
  }

  ${media.small} {
    margin: 0 1rem;
    margin-bottom: 1rem;
  }
`;

const menuStyle = css`
  ${boxBorder}
  list-style: none;
  flex: 1;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  ${media.small} {
    display: flex;
    margin: 0 1rem;
    li {
      width: 100%;
    }
  }
`;

export default GNB;
