import React from "react";
import Select from "../../components/Select";
import StatusBoard from "../../components/StatusBoard";
import useSelect from "../../hooks/useSelect";
import { SIDO } from "../../lib/constants";
import useStatisticsQuery from "../../lib/querys/useStatisticsQuery";

export type StatisticsProps = {};

function Statistics({}: StatisticsProps) {
  const { value, onChange } = useSelect(SIDO);
  const { data } = useStatisticsQuery({
    page: 1,
    perPage: 1,
  });

  console.log(data);
  return (
    <>
      <Select list={SIDO} onChange={onChange} />
      <StatusBoard sido={value} />
    </>
  );
}

export default Statistics;
