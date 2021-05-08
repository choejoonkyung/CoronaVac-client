import React from "react";
import { css } from "@emotion/react";
import palette from "../../lib/styles/palette";
import { resetButton } from "../../lib/styles/customs";
import { Period } from "../../lib/types";

export type BoxRadioProps = {
  list: Period[];
  active: number;
  handleRadio(index: number, menu: string): void;
};

function BoxRadio({ list, active, handleRadio }: BoxRadioProps) {
  return (
    <div css={wrapperStyle}>
      {list.map((v, i) => (
        <button
          css={itemStyle(active === i)}
          key={i}
          onClick={() => handleRadio(i, v)}
        >
          {v}
        </button>
      ))}
    </div>
  );
}

const wrapperStyle = css`
  display: inline-block;
  border-radius: 1rem;
  background-color: ${palette.grey[100]};
  border: 0.0625rem solid ${palette.blueGrey[50]};
`;

const itemStyle = (active: boolean) => css`
  ${resetButton}
  padding: 0.8rem;
  border-radius: inherit;

  &:hover {
    background: ${active ? palette.blueGrey[600] : palette.grey[50]};
  }

  ${active &&
  css`
    background: ${palette.blueGrey[700]};
    color: white;
    font-weight: bold;
  `}
`;

export default BoxRadio;
