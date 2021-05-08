import { useState } from "react";
import { useStatisticsState } from "../atoms/statisticsState";
import { Sido } from "../lib/types";

export default function useSidoSelect() {
  const [stats, setStats] = useStatisticsState();
  const [sido, setSido] = useState<Sido>(stats.sido);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSido(e.target.value as Sido);
    setStats({
      ...stats,
      sido: e.target.value as Sido,
    });
  };

  return { sido, onChange };
}
