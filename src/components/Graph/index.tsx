import React, { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts";
import { css } from "@emotion/react";
import palette from "../../lib/styles/palette";
import LoadingSpinner from "../LoadingSpinner";

export type GraphProps = {
  dateList: string[];
  firstList: number[];
  secondList: number[];
  title: string;
  isLoading?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

function Graph({
  dateList,
  firstList,
  secondList,
  title = "",
  isLoading = false,
  ...rest
}: GraphProps) {
  const ref = useRef<HTMLDivElement>(null);

  const graphOption = useMemo(() => {
    return {
      title: [
        {
          text: title,
          subtext: `기간: ${dateList[0]} ~ ${dateList[dateList.length - 1]}`,
        },
      ],
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
          data: firstList,
        },
        {
          name: "2차 접종",
          type: "line",
          data: secondList,
        },
      ],
    };
  }, [dateList, firstList, secondList]);

  useEffect(() => {
    if (ref.current && graphOption) {
      const graph = echarts.init(ref.current);
      graph.setOption(graphOption);
    }
  }, [graphOption]);

  return (
    <div css={wrapper} {...rest}>
      {isLoading ? (
        <div css={loadingStyle}>
          <LoadingSpinner />{" "}
        </div>
      ) : (
        <div css={chartStyle} ref={ref}></div>
      )}
    </div>
  );
}

const wrapper = css`
  display: flex;
  justify-content: center;
`;
const loadingStyle = css`
  height: 25rem;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 3rem;
    height: 3rem;
    color: ${palette.blueGrey[600]};
  }
`;
const chartStyle = css`
  height: 25rem;
  width: 100%;
`;

export default Graph;
