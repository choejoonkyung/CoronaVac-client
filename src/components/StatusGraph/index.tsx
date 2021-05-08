import React from "react";
import { css } from "@emotion/react";
import BoxRadio from "../BoxRadio";
import useBoxRadio from "../../hooks/useBoxRadio";
import { MENU_LIST } from "../../lib/constants";
import Graph from "../Graph";
import useStatusGraph from "../../hooks/useStatusGraph";

export type StatusGraphProps = {
  sido: string;
};

function StatusGraph({ sido }: StatusGraphProps) {
  const { menu, active, handleRadio } = useBoxRadio(MENU_LIST);
  const { dateList, firstCntList, secondCntList } = useStatusGraph(sido, menu);

  return (
    <div css={statusGraphStyle}>
      <BoxRadio list={MENU_LIST} active={active} handleRadio={handleRadio} />
      <Graph
        dateList={dateList}
        firstCntList={firstCntList}
        secondCntList={secondCntList}
        css={graphStyle}
      />
    </div>
  );
}

const statusGraphStyle = css``;
const graphStyle = css`
  margin-top: 1rem;
`;

export default StatusGraph;
