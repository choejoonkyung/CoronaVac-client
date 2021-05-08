import React from "react";
import { css } from "@emotion/react";
import BoxRadio from "../BoxRadio";
import useBoxRadio from "../../hooks/useBoxRadio";

export type StatusGraphProps = {
  sido: string;
};

function StatusGraph({ sido }: StatusGraphProps) {
  const { active, setActive } = useBoxRadio();
  return (
    <div css={statusGraphStyle}>
      <BoxRadio
        list={["1주", "1달", "3달", "전체"]}
        active={active}
        onActive={setActive}
      />
    </div>
  );
}

const statusGraphStyle = css`
  display: flex;
  justify-content: flex-end;
`;

export default StatusGraph;
