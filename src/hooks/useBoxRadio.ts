import { useCallback, useState } from "react";
import { Period } from "../lib/types";

export default function useBoxRadio(list: Period[]) {
  const [menu, setMenu] = useState(list[0]);
  const [active, setActive] = useState(0);

  const handleRadio = useCallback((index: number, menu: Period) => {
    setMenu(menu);
    setActive(index);
  }, []);

  return { menu, active, handleRadio };
}
