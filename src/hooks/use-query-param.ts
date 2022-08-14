import { useSearchParams } from "react-router-dom";
import { useCallback, useMemo } from "react";

type queryParam = {
  [key: string]: string;
}

type queryParamsType = [
  value: string | null ,
  setValue: (newValue: string, queryParam: queryParam) => void,
  allQueryParams: queryParam
]

export const useQueryParam = (key: string): queryParamsType => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(key);
  const value = useMemo(() => paramValue, [paramValue]);

  const setValue = useCallback(
    (newValue:string , queryParams:queryParam = {}) => {
      setSearchParams({ ...queryParams, [key]: newValue });
    },
    [key, setSearchParams]
  );
  
  const allQueryParams = Object.fromEntries([...searchParams]) || {};

  return [value, setValue, allQueryParams];
};
