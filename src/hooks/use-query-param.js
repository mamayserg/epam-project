import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

export const useQueryParam = (key) => {
  const router = useRouter();

  let paramValue = router.query[key] || ''
  let value = useMemo(() => paramValue, [paramValue]);

  let setValue = useCallback(
    (newValue, queryParams = {}) => {
      router.replace({
        query: { ...queryParams, [key]: newValue },
     });
    },
    [key, router]
  );

  const allQueryParams = router.query
  return [value, setValue, allQueryParams];
};
