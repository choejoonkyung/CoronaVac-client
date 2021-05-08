import { useState } from "react";

export default function useBoxRadio() {
  const [active, setActive] = useState(0);

  return { active, setActive };
}
