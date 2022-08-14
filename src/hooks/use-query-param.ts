import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

export type queryParam = {
  [key: string]: string;
}

type queryParamsType = [
  value: string | null ,
  setValue: (newValue: string, queryParam: queryParam) => void,
  allQueryParams: queryParam
]

export const useQueryParam = (key: string): queryParamsType => {
  const router = useRouter();

  const paramValue: string = (router.query[key] || '') as string 
  const value = useMemo(() => paramValue, [paramValue]);

  const setValue = useCallback(
    (newValue:string, queryParams:queryParam = {}) => {
      router.replace({
        query: { ...queryParams, [key]: newValue },
     });
    },
    [key, router]
  );

  const allQueryParams: queryParam = router.query as queryParam
  return [value, setValue, allQueryParams];
};
