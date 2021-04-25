import { css } from "@emotion/react";
import palette from "./palette";

export const resetButton = css`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  cursor: pointer;
`;

export const resetP = css`
  margin: 0;
  padding: 0;
`;

export const boxShadow = css`
  box-shadow: 0px 1rem 1rem rgba(67, 67, 67, 0.03);
`;

export const boxBorder = css`
  background: ${palette.white};
  border: 0.0625rem solid rgba(70, 77, 82, 0.082);
  box-shadow: rgb(0 0 0 / 2%) -0.0625rem 0.0625rem 0.375rem;
  border-radius: 0.75rem;
`;
