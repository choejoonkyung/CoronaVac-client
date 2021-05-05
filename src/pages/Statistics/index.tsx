import React from "react";
import Select from "../../components/Select";
import StatusBoard from "../../components/StatusBoard";
import useSelect from "../../hooks/useSelect";
import { SIDO } from "../../lib/constants";

export type StatisticsProps = {};

function Statistics({}: StatisticsProps) {
  const { value, onChange } = useSelect(SIDO);
  return (
    <>
      <Select list={SIDO} onChange={onChange} />
      <StatusBoard sido={value} />
    </>
  );
}

export default Statistics;
