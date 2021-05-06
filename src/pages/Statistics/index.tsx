import { css } from "@emotion/react";
import React from "react";
import SectionBase from "../../components/SectionBase";
import Select from "../../components/Select";
import StatusBoard from "../../components/StatusBoard";
import useSelect from "../../hooks/useSelect";
import { SIDO } from "../../lib/constants";

export type StatisticsProps = {};

function Statistics({}: StatisticsProps) {
  const { value, onChange } = useSelect(SIDO);

  return (
    <div css={wrapperStyle}>
      <SectionBase>
        <Select list={SIDO} onChange={onChange} />
      </SectionBase>
      <SectionBase>
        <StatusBoard sido={value} />
      </SectionBase>
    </div>
  );
}

const wrapperStyle = css`
  section + section {
    margin-top: 1rem;
  }
`;
export default Statistics;
