import React from "react";
import Select from "../../components/Select";
import { css } from "@emotion/react";
import StatusBoard from "../../components/StatusBoard";
import { SIDO } from "../../lib/constants";

export type StatisticsProps = {};

function Statistics({}: StatisticsProps) {
  return (
    <>
      <Select items={SIDO} />
      <StatusBoard></StatusBoard>
    </>
  );
}

export default Statistics;
