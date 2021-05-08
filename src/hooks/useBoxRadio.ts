import { useCallback, useEffect, useState } from "react";
import { Period } from "../lib/types";

export default function useBoxRadio(list: Period[], sido: string) {
  const [radioValue, setRadioValue] = useState(list[0]);
  const [active, setActive] = useState(0);

  const handleRadio = useCallback((index: number, radio: Period) => {
    setRadioValue(radio);
    setActive(index);
  }, []);

  useEffect(() => {
    setRadioValue(list[0]);
    setActive(0);
  }, [sido]);

  return { radioValue, active, handleRadio };
}
