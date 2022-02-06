import React from "react";
import { css } from "@emotion/react";
import SectionBase from "../../components/SectionBase";
import Select from "../../components/Select";
import StatusBoard from "../../components/StatusBoard";
import useSidoSelect from "../../hooks/useSidoSelect";
import { SIDO } from "../../lib/constants";
import StatusGraph from "../../components/StatusGraph";
import { Helmet } from "react-helmet-async";
import media from "../../lib/styles/media";
import { sectionHeaderStyle } from "../../lib/styles/customs";

export type StatisticsProps = {};

function Statistics({}: StatisticsProps) {
  const { sido, onChange } = useSidoSelect();

  return (
    <article css={wrapperStyle}>
      <Helmet>
        <title>CoronaVac - 코로나 백신 접종 통계</title>
      </Helmet>
      <h1 css={sectionHeaderStyle}>백신 통계 정보</h1>
      <SectionBase>
        <Select list={SIDO} selected={sido} onChange={onChange} />
      </SectionBase>
      <SectionBase css={boardStyle}>
        <StatusBoard sido={sido} />
      </SectionBase>
      <SectionBase css={graphStyle}>
        <StatusGraph sido={sido} />
      </SectionBase>
    </article>
  );
}

const wrapperStyle = css`
  section + section {
    margin-top: 1rem;
  }

  ${media.small} {
    section {
      margin: 0 1rem;
    }
  }
`;

const boardStyle = css`
  padding: 1rem;
`;

const graphStyle = css`
  padding: 1rem;
`;

export default Statistics;
