import React, { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";
import { css } from "@emotion/react";
import palette from "../../lib/styles/palette";

export type GraphProps = {
  dateList: string[];
  firstCntList: number[];
  secondCntList: number[];
} & React.HTMLAttributes<HTMLDivElement>;

function Graph({ dateList, firstCntList, secondCntList, ...rest }: GraphProps) {
  const ref = useRef<HTMLDivElement>(null);

  const graphOption = useMemo(() => {
    return {
      tooltip: {
        trigger: "axis",
      },
      color: [palette.green[600], palette.blue[600]],
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        data: dateList,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "1차 접종",
          type: "line",
          data: firstCntList,
        },
        {
          name: "2차 접종",
          type: "line",
          data: secondCntList,
        },
      ],
    };
  }, [dateList, firstCntList, secondCntList]);

  useEffect(() => {
    if (ref.current && graphOption) {
      const graph = echarts.init(ref.current);
      graph.setOption(graphOption);
    }
  }, [graphOption]);

  return (
    <div css={wrapper} {...rest}>
      <div css={chartStyle} ref={ref}></div>
    </div>
  );
}

const wrapper = css``;
const chartStyle = css`
  height: 25rem;
  width: 100%;
`;

export default Graph;
