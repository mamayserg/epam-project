import { useState } from "react";

export function useInput(defaultState: any) {
  const [value, setValue] = useState(defaultState);

  return [
    {
      value,
      onChange: (e: { target: { value: any; }; }) => setValue(e.target.value),
    },
    (e = defaultState) => setValue(e),
  ];
}
