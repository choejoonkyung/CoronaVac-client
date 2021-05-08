import React from "react";
import { css } from "@emotion/react";
import BoxRadio from "../BoxRadio";
import useBoxRadio from "../../hooks/useBoxRadio";
import { MENU_LIST } from "../../lib/constants";

export type StatusGraphProps = {
  sido: string;
};

function StatusGraph({}: StatusGraphProps) {
  const { active, menu, handleRadio } = useBoxRadio(MENU_LIST);
  console.log(menu);

  return (
    <div css={statusGraphStyle}>
      <BoxRadio list={MENU_LIST} active={active} handleRadio={handleRadio} />
    </div>
  );
}

const statusGraphStyle = css``;

export default StatusGraph;
