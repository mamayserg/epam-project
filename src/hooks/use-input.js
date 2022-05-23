import { useState } from "react";

export function useInput(defaultState) {
  const [value, setValue] = useState(defaultState);

  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    (e = defaultState) => setValue(e),
  ];
}
