import React from "react";
import { css } from "@emotion/react";
import BoxRadio from "../BoxRadio";
import usePeriodBoxRadio from "../../hooks/usePeriodBoxRadio";
import { PERIOD_LIST } from "../../lib/constants";
import Graph from "../Graph";
import useStatusGraph from "../../hooks/useStatusGraph";
import { Sido } from "../../lib/types";

export type StatusGraphProps = {
  sido: Sido;
};

function StatusGraph({ sido }: StatusGraphProps) {
  const { period, active, handleRadio } = usePeriodBoxRadio(PERIOD_LIST, sido);
  const {
    dateList,
    firstCntList,
    secondCntList,
    firstTotalCntList,
    secondTotalCntList,
    isLoading,
  } = useStatusGraph(sido, period);

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
