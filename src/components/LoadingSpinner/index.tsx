import { css } from "@emotion/react";
import { rotate } from "../../lib/styles/animations";
import palette from "../../lib/styles/palette";
import SvgIcon from "../SvgIcon";

export type LoadingSpinnerProps = {
  size?: string;
  color?: string;
};

function LoadingSpinner({
  size = "1rem",
  color = palette.black,
}: LoadingSpinnerProps) {
  return <SvgIcon name="spinner" css={spinner(size, color)} />;
}

const spinner = (size: string, color: string) => css`
  width: ${size};
  height: ${size};
  color: ${color};
  animation: ${rotate} 0.85s ease-in-out infinite;
`;

export default LoadingSpinner;
