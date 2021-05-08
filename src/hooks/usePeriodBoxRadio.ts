import { useCallback, useState } from "react";
import { useStatisticsState } from "../atoms/statisticsState";
import { Period } from "../lib/types";

export default function usePeriodBoxRadio(list: Period[]) {
  const [stats, setStats] = useStatisticsState();
  const [period, setPeriod] = useState<Period>(stats.period);
  const [active, setActive] = useState<number>(list.indexOf(stats.period));

  const handleRadio = useCallback((index: number, period: Period) => {
    setPeriod(period);
    setActive(index);

    setStats({
      ...stats,
      period: period,
    });
  }, []);

  return { period, active, handleRadio };
}
