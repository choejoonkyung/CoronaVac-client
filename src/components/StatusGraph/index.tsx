import React from "react";
import { css } from "@emotion/react";

export type StatusGraphProps = {
  sido: string;
};

function StatusGraph({ sido }: StatusGraphProps) {
  return (
    <div css={StatusGraphStyle}>
      <div> 선택한 {sido}의 날짜 별 통계를 그래프로 보여준다</div>
    </div>
  );
}

const StatusGraphStyle = css``;

export default StatusGraph;
