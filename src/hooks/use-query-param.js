import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";

export const useQueryParam = (key) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let paramValue = searchParams.get(key);
  let value = useMemo(() => paramValue, [paramValue]);

  let setValue = useCallback(
    (newValue, queryParams = {}) => {
      setSearchParams({ ...queryParams, [key]: newValue });
    },
    [key, setSearchParams]
  );

  let allQueryParams = Object.fromEntries([...searchParams]) || {};

  return [value, setValue, allQueryParams];
};
