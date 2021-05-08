import React from "react";
import { css } from "@emotion/react";
import palette from "../../lib/styles/palette";
import { resetButton } from "../../lib/styles/customs";

export type BoxRadioProps = {
  list: string[];
  active: number;
  onActive(index: number): void;
};

function BoxRadio({ list, active, onActive }: BoxRadioProps) {
  return (
    <div css={wrapperStyle}>
      {list.map((v, i) => (
        <button
          css={itemStyle(active === i)}
          key={i}
          onClick={() => onActive(i)}
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
  padding: 0.85rem;
  border-radius: inherit;

  &:hover {
    background: ${active ? palette.blueGrey[500] : palette.grey[50]};
  }

  ${active &&
  css`
    background: ${palette.blueGrey[600]};
    color: white;
    font-weight: bold;
  `}
`;

export default BoxRadio;
