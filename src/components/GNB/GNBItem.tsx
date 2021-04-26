import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";
import palette from "../../lib/styles/palette";
import SvgIcon, { SvgIconType } from "../SvgIcon";

export type GNBItemProps = {
  icon: SvgIconType;
  text: string;
  to: string;
};

function GNBItem({ icon, to, text }: GNBItemProps) {
  return (
    <li css={liStyle}>
      <NavLink to={to} css={navStyle} exact>
        <SvgIcon name={icon} />
        <span>{text}</span>
      </NavLink>
    </li>
  );
}

const liStyle = css`
  &:first-child {
    border-top-left-radius: 0.75rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.75rem;
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
    width: 1.75rem;
    height: 1.75rem;
  }

  span {
    font-size: 1.125rem;
    margin-left: 1rem;
  }

  &.active {
    background: ${palette.grey[100]};
    border-left: 0.1875rem solid ${palette.blueGrey[900]};
    padding-left: calc(1rem - 0.1875rem);
    color: ${palette.blueGrey[900]};
    transition: 0.08s ease-in;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit;

    span {
      font-weight: bold;
    }
  }
`;

export default GNBItem;
