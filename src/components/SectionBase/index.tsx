import { css } from "@emotion/react";
import React from "react";
import { boxBorder } from "../../lib/styles/customs";

export type SectionBaseProps = {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

function SectionBase({ children, ...rest }: SectionBaseProps) {
  return (
    <section css={wrapperStyle} {...rest}>
      {children}
    </section>
  );
}

const wrapperStyle = css`
  ${boxBorder}
`;

export default SectionBase;
