import { useEffect, useState } from "react";
import { StatisticsRes } from "../lib/api/dataGo/getStatistics";
import { numberWithCommas } from "../lib/utils/number";

export default function useStatusBoard(data: StatisticsRes | undefined) {
  const [firstCnt, setfirstCnt] = useState<string>();
  const [secondCnt, setSecondCnt] = useState<string>();
  const [firstIncrease, setFirstIncrease] = useState<string>();
  const [secondIncrease, setSecondIncrease] = useState<string>();
  const [baseDate, setBaseDate] = useState<string>();
  const [baseSido, setBaseSido] = useState<string>();

  useEffect(() => {
    if (data) {
      console.log(data.data[0].sido);
      setBaseDate(data.data[0].baseDate);
      setBaseSido(data.data[0].sido);
      setfirstCnt(numberWithCommas(data.data[0].totalFirstCnt));
      setSecondCnt(numberWithCommas(data.data[0].totalSecondCnt));
      setFirstIncrease(
        numberWithCommas(
          data.data[0].totalFirstCnt - data.data[0].accumulatedFirstCnt
        )
      );
      setSecondIncrease(
        numberWithCommas(
          data.data[0].totalSecondCnt - data.data[0].accumulatedSecondCnt
        )
      );
    }
  }, [data]);

  return {
    firstCnt,
    secondCnt,
    firstIncrease,
    secondIncrease,
    baseDate,
    baseSido,
  };
}
