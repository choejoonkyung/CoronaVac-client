import React, { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";
import { css } from "@emotion/react";

export type GraphProps = {
  dateList: string[];
  firstCntList: number[];
  secondCntList: number[];
} & React.HTMLAttributes<HTMLDivElement>;

function Graph({ dateList, firstCntList, secondCntList, ...rest }: GraphProps) {
  const ref = useRef<HTMLDivElement>();

  const graphOption = useMemo(() => {
    return {
      tooltip: {
        trigger: "axis",
      },

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
        type: "category",
        boundaryGap: false,
        data: ["2020-11-1", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "1차 접종",
          type: "line",
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "2차 접종",
          type: "line",
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    };
  }, [dateList, valueList]);

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
