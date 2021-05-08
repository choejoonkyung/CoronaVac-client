import React from "react";
import { css } from "@emotion/react";
import { resetP } from "../../lib/styles/customs";
import palette from "../../lib/styles/palette";
import { shining } from "../../lib/styles/animations";

export type StatusBoardSkeletonProps = {};

function StatusBoardSkeleton({}: StatusBoardSkeletonProps) {
  return (
    <>
      <div css={wrapperStyle}>
        <div css={statusStyle}>
          <p css={subTitleStyle}>1차 접종</p>
          <p css={countStyle}>1</p>
          <div css={cntArrowStyle}>
            <p css={increaseCntStyle}>1</p>
          </div>
        </div>
        <div css={statusStyle}>
          <p css={subTitleStyle}>2차 접종</p>
          <p css={countStyle}>1</p>
          <div css={cntArrowStyle}>
            <p css={increaseCntStyle}>1</p>
          </div>
        </div>
      </div>
      <div css={dateStyle}>1</div>
    </>
  );
}

const wrapperStyle = css`
  display: flex;
`;

const statusStyle = css`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  align-items: center;
`;

const subTitleStyle = css`
  ${resetP}
  font-weight: lighter;
  font-size: 0.9rem;
`;

const countStyle = () => css`
  ${resetP}
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.4rem;
  width: 4.5rem;

  border-radius: 0.7rem;
  background-color: ${palette.grey[300]};
  color: ${palette.grey[300]};

  animation: ${shining} 1s ease-in-out infinite;
`;

const cntArrowStyle = () => css`
  padding: 0 0.5rem;
  border-radius: 1rem;
  margin-top: 0.3rem;

  display: flex;
  align-items: center;

  width: 2.5rem;
  background-color: ${palette.grey[300]};
  color: ${palette.grey[300]};

  animation: ${shining} 1s ease-in-out infinite;
  p {
    ${resetP}
  }
`;

const increaseCntStyle = () => css`
  border-radius: 1rem;
`;

const dateStyle = css`
  ${resetP}
  margin-top: 1.5rem;
  font-size: 0.875rem;

  margin-left: 28rem;
  border-radius: 1rem;
  background-color: ${palette.grey[300]};
  color: ${palette.grey[300]};

  animation: ${shining} 1s ease-in-out infinite;
`;

export default StatusBoardSkeleton;
