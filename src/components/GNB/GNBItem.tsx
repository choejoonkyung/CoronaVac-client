import React from "react";
import { css } from "@emotion/react";
import { match, NavLink } from "react-router-dom";
import palette from "../../lib/styles/palette";
import SvgIcon, { SvgIconType } from "../SvgIcon";
import * as H from "history";
import { navFadeIn } from "../../lib/styles/animations";
import media from "../../lib/styles/media";

export type GNBItemProps = {
  icon: SvgIconType;
  text: string;
  to: string;
  isActive?<Params extends { [K in keyof Params]?: string }>(
    match: match<Params> | null,
    location: H.Location
  ): boolean;
};

function GNBItem({ icon, to, text, isActive }: GNBItemProps) {
  return (
    <li css={liStyle}>
      <NavLink to={to} css={navStyle} isActive={isActive} exact>
        <SvgIcon name={icon} />
        <span>{text}</span>
      </NavLink>
    </li>
  );
}

const liStyle = css`
  &:first-of-type {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }
  &:last-child {
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
  ${media.small} {
    &:first-of-type {
      border-top-left-radius: 0.75rem;
      border-bottom-left-radius: 0.75rem;
      border-top-right-radius: 0;
    }
    &:last-child {
      border-top-right-radius: 0.75rem;
      border-bottom-left-radius: 0;
    }
  }
`;

const navStyle = css`
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 3.75rem;
  padding: 1rem;
  color: ${palette.blueGrey[600]};

  &:hover {
    background: ${palette.grey[50]};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    font-size: 1rem;
    margin-left: 1rem;
  }

  ${media.small} {
    justify-content: center;
  }

  &.active {
    background: ${palette.grey[100]};
    border-left: 0.1875rem solid ${palette.blueGrey[900]};
    padding-left: calc(1rem - 0.1875rem);
    color: ${palette.blueGrey[900]};
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;

    animation: ${navFadeIn} 0.5s ease-in-out 1;

    ${media.small} {
      border-left: 0;
      border-top: 0.1875rem solid ${palette.blueGrey[900]};
      border-top-right-radius: inherit;
      border-bottom-left-radius: inherit;
    }

    span {
      font-weight: bold;
    }
  }
`;

export default GNBItem;
