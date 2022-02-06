import { css } from "@emotion/react";
import React from "react";
import { boxBorder, sectionHeaderStyle } from "../../lib/styles/customs";

export type SectionBaseProps = {
  children?: React.ReactNode;
  heading: string;
} & React.HTMLAttributes<HTMLElement>;

function SectionBase({ children, heading, ...rest }: SectionBaseProps) {
  return (
    <section css={wrapperStyle} {...rest}>
      <h2 css={sectionHeaderStyle}>{heading}</h2>
      {children}
    </section>
  );
}

const wrapperStyle = css`
  ${boxBorder}
`;

export default SectionBase;
