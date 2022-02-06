import React from "react";
import { css } from "@emotion/react";
import SectionBase from "../../components/SectionBase";
import { Helmet } from "react-helmet-async";

export type SearchCenterProps = {};

function SearchCenter({}: SearchCenterProps) {
  return (
    <div css={wrapper}>
      <Helmet>
        <title>CoronaVac - 접종 센터 찾기</title>
      </Helmet>
      <SectionBase heading="">서비스 준비중입니다.</SectionBase>
    </div>
  );
}

const wrapper = css`
  section + section {
    margin-top: 1rem;
  }
`;

export default SearchCenter;
