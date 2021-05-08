import { useEffect, useState } from "react";
import { useStatisticsState } from "../atoms/statisticsState";
import { Period, Sido } from "../lib/types";

export default function usePeriodBoxRadio(list: Period[], sido: Sido) {
  const [stats, setStats] = useStatisticsState();
  const [period, setPeriod] = useState<Period>(stats.period);
  const [active, setActive] = useState<number>(list.indexOf(stats.period));

  const handleRadio = (index: number, period: Period) => {
    setPeriod(period);
    setActive(index);

    setStats({
      ...stats,
      period: period,
    });
  };

  useEffect(() => {
    if (stats.sido !== sido) {
      setPeriod("1주");
      setActive(0);

      setStats({
        sido: sido,
        period: "1주",
      });
    }
  }, [sido]);

  return { period, active, handleRadio };
}
