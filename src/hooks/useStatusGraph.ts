import { useEffect, useState } from "react";
import useStatisticsQuery from "../lib/querys/useStatisticsQuery";
import { Period } from "../lib/types";
import { calcPeriodDate } from "../lib/utils/date";

export default function useStatusGraph(sido: string, period: Period) {
  const [dateList, setDateList] = useState<string[]>([]);
  const [firstCntList, setFristCntList] = useState<number[]>([]);
  const [firstTotalCntList, setFirstTotalCntList] = useState<number[]>([]);
  const [secondCntList, setSecondCntList] = useState<number[]>([]);
  const [secondTotalCntList, setSecondTotalCntList] = useState<number[]>([]);

  const { data, isLoading } = useStatisticsQuery({
    page: 1,
    perPage: 1000,
    "cond[baseDate::GTE]": calcPeriodDate(period),
    "cond[sido::EQ]": sido,
  });

  useEffect(() => {
    if (!data) return;
    setDateList(
      data.data.map((v) => v.baseDate.substring(0, v.baseDate.indexOf(" ")))
    );
    setFristCntList(data.data.map((v) => v.firstCnt));
    setSecondCntList(data.data.map((v) => v.secondCnt));
    setFirstTotalCntList(data.data.map((v) => v.totalFirstCnt));
    setSecondTotalCntList(data.data.map((v) => v.totalSecondCnt));
  }, [sido, period, data]);

  return {
    dateList,
    firstCntList,
    secondCntList,
    firstTotalCntList,
    secondTotalCntList,
    isLoading,
  };
}
