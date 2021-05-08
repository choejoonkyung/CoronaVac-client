import { useState } from "react";

export default function useBoxRadio(list: string[]) {
  const [menu, setMenu] = useState(list[0]);
  const [active, setActive] = useState(0);

  const handleRadio = (index: number, menu: string) => {
    setMenu(menu);
    setActive(index);
  };

  return { menu, active, handleRadio };
}
