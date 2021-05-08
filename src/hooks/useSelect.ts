import { useCallback, useState } from "react";

export default function useSelect(list: string[]) {
  const [value, setValue] = useState(list[0]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
}
