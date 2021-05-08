import React from "react";
import { css } from "@emotion/react";
import BoxRadio from "../BoxRadio";
import useBoxRadio from "../../hooks/useBoxRadio";
import { MENU_LIST } from "../../lib/constants";
import Graph from "../Graph";

export type StatusGraphProps = {
  sido: string;
};

function StatusGraph({ sido }: StatusGraphProps) {
  const { menu, active, handleRadio } = useBoxRadio(MENU_LIST);

  return (
    <div css={statusGraphStyle}>
      <BoxRadio list={MENU_LIST} active={active} handleRadio={handleRadio} />
      <Graph sido={sido} menu={menu} />
    </div>
  );
}

const statusGraphStyle = css``;

export default StatusGraph;
