import React from "react";
import { css } from "@emotion/react";

export type StatusGraphProps = {
  sido: string;
};

function StatusGraph({ sido }: StatusGraphProps) {
  return (
    <div css={StatusGraphStyle}>
      <div> 현재시간까지 {sido} 날짜 별 통계</div>
    </div>
  );
}

const StatusGraphStyle = css``;

export default StatusGraph;
