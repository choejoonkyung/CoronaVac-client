import { useState } from "react";

export default function useSelect(list: string[]) {
  const [value, setValue] = useState(list[0]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange };
}
