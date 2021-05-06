import { css } from "@emotion/react";
import React from "react";
import { boxBorder } from "../../lib/styles/customs";

export type SectionBaseProps = {
  children?: React.ReactNode;
};

function SectionBase({ children }: SectionBaseProps) {
  return <section css={wrapperStyle}>{children}</section>;
}

const wrapperStyle = css`
  ${boxBorder}
  display: flex;
`;

export default SectionBase;
