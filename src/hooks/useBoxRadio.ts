import { useCallback, useState } from "react";
import { Period } from "../lib/types";

export default function useBoxRadio(list: Period[]) {
  const [radioValue, setRadioValue] = useState(list[0]);
  const [active, setActive] = useState(0);

  const handleRadio = useCallback((index: number, radio: Period) => {
    setRadioValue(radio);
    setActive(index);
  }, []);

  return { radioValue, active, handleRadio };
}
