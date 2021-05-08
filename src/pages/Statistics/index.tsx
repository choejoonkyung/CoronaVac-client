import React from "react";
import { css } from "@emotion/react";
import SectionBase from "../../components/SectionBase";
import Select from "../../components/Select";
import StatusBoard from "../../components/StatusBoard";
import useSidoSelect from "../../hooks/useSidoSelect";
import { SIDO } from "../../lib/constants";
import StatusGraph from "../../components/StatusGraph";

export type StatisticsProps = {};

function Statistics({}: StatisticsProps) {
  const { sido, onChange } = useSidoSelect();

  return (
    <div css={wrapperStyle}>
      <SectionBase>
        <Select list={SIDO} selected={sido} onChange={onChange} />
      </SectionBase>
      <SectionBase css={boardStyle}>
        <StatusBoard sido={sido} />
      </SectionBase>
      <SectionBase css={graphStyle}>
        <StatusGraph sido={sido} />
      </SectionBase>
    </div>
  );
}

const wrapperStyle = css`
  section + section {
    margin-top: 1rem;
  }
`;

const boardStyle = css`
  padding: 1rem;
`;

const graphStyle = css`
  padding: 1rem;
`;

export default Statistics;
