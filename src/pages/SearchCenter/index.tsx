import React from "react";
import { css } from "@emotion/react";
import SectionBase from "../../components/SectionBase";

export type SearchCenterProps = {};

function SearchCenter({}: SearchCenterProps) {
  return (
    <div css={wrapper}>
      <SectionBase>서비스 중비중입니다.</SectionBase>
    </div>
  );
}

const wrapper = css`
  section + section {
    margin-top: 1rem;
  }
`;

export default SearchCenter;
