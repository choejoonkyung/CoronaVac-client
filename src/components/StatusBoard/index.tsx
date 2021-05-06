import React from "react";
import { css } from "@emotion/react";
import useStatusBoard from "../../hooks/useStatusBoard";
import { resetP } from "../../lib/styles/customs";
import palette from "../../lib/styles/palette";
import useStatisticsQuery from "../../lib/querys/useStatisticsQuery";
import SvgIcon from "../SvgIcon";
import { fadeIn } from "../../lib/styles/animations";

export type StatusBoardProps = {
  sido: string;
};

function StatusBoard({ sido }: StatusBoardProps) {
  const { data, isLoading } = useStatisticsQuery({
    page: 1,
    perPage: 1,
    "cond[baseDate::GTE]": "2021-05-06",
    "cond[sido::EQ]": sido,
  });

  const {
    firstCnt,
    firstIncrease,
    secondCnt,
    secondIncrease,
    date,
  } = useStatusBoard(data);

  if (isLoading) return null;
  return (
    <>
      <div css={wrapperStyle}>
        <div css={statusStyle}>
          <p css={subTitleStyle}>1차 접종</p>
          <p css={countStyle(palette.green[600])}>{firstCnt}</p>
          <div css={cntArrowStyle(palette.green[50], palette.green[600])}>
            <p css={increaseCntStyle(palette.green[600])}>{firstIncrease}</p>
            <SvgIcon name="upArrow" />
          </div>
        </div>
        <div css={statusStyle}>
          <p css={subTitleStyle}>2차 접종</p>
          <p css={countStyle(palette.blue[600])}>{secondCnt}</p>
          <div css={cntArrowStyle(palette.blue[50], palette.blue[600])}>
            <p css={increaseCntStyle(palette.blue[600])}>{secondIncrease}</p>
            <SvgIcon name="upArrow" />
          </div>
        </div>
      </div>
      <p css={dateStyle}>기준: {date}</p>
    </>
  );
}

const wrapperStyle = css`
  display: flex;
  justify-content: space-around;
`;

const statusStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    ${resetP}
  }
`;

const subTitleStyle = css`
  color: ${palette.blueGrey[600]};
  font-weight: lighter;
  font-size: 0.9rem;
`;

const countStyle = (color: string) => css`
  color: ${color};
  font-size: 1.5rem;
  font-weight: bold;
`;

const cntArrowStyle = (background: string, color: string) => css`
  background-color: ${background};
  padding: 0 0.5rem;
  border-radius: 1rem;
  margin-top: 0.3rem;

  display: flex;
  align-items: center;

  animation: 0.35s ease-in ${fadeIn};

  svg {
    color: ${color};
    width: 0.7rem;
    height: 0.7rem;
    transform: translate(30%, 5%);
  }
`;

const increaseCntStyle = (color: string) => css`
  color: ${color};
  border-radius: 1rem;
`;

const dateStyle = css`
  ${resetP}
  margin-top: 1.5rem;
  text-align: right;
  color: ${palette.blueGrey[600]};
  font-size: 0.875rem;
`;

export default StatusBoard;
