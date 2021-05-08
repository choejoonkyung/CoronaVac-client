import React from "react";
import { css } from "@emotion/react";
import BoxRadio from "../BoxRadio";
import useBoxRadio from "../../hooks/useBoxRadio";
import { PERIOD_LIST } from "../../lib/constants";
import Graph from "../Graph";
import useStatusGraph from "../../hooks/useStatusGraph";

export type StatusGraphProps = {
  sido: string;
};

function StatusGraph({ sido }: StatusGraphProps) {
  const { radioValue, active, handleRadio } = useBoxRadio(PERIOD_LIST, sido);
  const {
    dateList,
    firstCntList,
    secondCntList,
    firstTotalCntList,
    secondTotalCntList,
    isLoading,
  } = useStatusGraph(sido, radioValue);

  return (
    <div css={statusGraphStyle}>
      <BoxRadio list={PERIOD_LIST} active={active} handleRadio={handleRadio} />
      <Graph
        title="백신 접종 누적 통계"
        dateList={dateList}
        firstList={firstTotalCntList}
        secondList={secondTotalCntList}
        isLoading={isLoading}
        css={graphStyle}
      />
      <Graph
        title="백신 접종 일일 통계"
        dateList={dateList}
        firstList={firstCntList}
        secondList={secondCntList}
        isLoading={isLoading}
        css={graphStyle}
      />
    </div>
  );
}

const statusGraphStyle = css`
  height: 54rem;
`;
const graphStyle = css`
  margin-top: 1rem;
`;

export default StatusGraph;
