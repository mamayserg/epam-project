import { renderHook, act } from "@testing-library/react-hooks";
import { useQueryParam } from "../hooks/use-query-param";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import {
  queryParamsKeys,
  queryParamsValues,
} from "../constants/searchParams";

const queryParams = {
  [queryParamsKeys.SEARCH_BY]: queryParamsValues.TITLE,
};
const queryDesc = queryParamsValues.DESC;

const expectedSearchResult = `?${queryParamsKeys.SEARCH_BY}=${queryParamsValues.TITLE}&${queryParamsKeys.SORT_ORDER}=${queryDesc}`;
const expectedAllQueryParams = {
  ...queryParams,
  [queryParamsKeys.SORT_ORDER]: queryDesc,
};

const wrapper = ({ children }) => {
  return <Router>{children}</Router>;
};

describe("useQueryParamHook", () => {
  it("renders empty useQueryParamHook", () => {
    const {
      result: { current },
    } = renderHook(() => useQueryParam(), { wrapper });
    const [value] = current;
    expect(value).toBeNull();
  });

  it("renders useQueryParamHook with params", () => {
    const { result } = renderHook(
      () => {
        return {
          navigation: useQueryParam(queryParamsKeys.SORT_ORDER),
          location: useLocation(),
        };
      },
      { wrapper }
    );
    const { navigation, location } = result.current;
    const [queryParam, setValue, allQueryParams] = navigation;
    const { search } = location;
    expect(queryParam).toBeNull();
    expect(allQueryParams).toEqual({});
    expect(search).toEqual("");

    act(() => setValue(queryDesc, queryParams));

    const { navigation: nextNavigation, location: nextLocation } =
      result.current;

    const [nextQueryParam, , nextAllQueryParams] = nextNavigation;
    const { search: nextSearch } = nextLocation;

    expect(nextQueryParam).toEqual(queryDesc);
    expect(nextAllQueryParams).toEqual(expectedAllQueryParams);
    expect(nextSearch).toEqual(expectedSearchResult);
  });
});
