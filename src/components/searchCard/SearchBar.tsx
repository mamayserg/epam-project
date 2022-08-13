import {
  queryParamsKeys,
  queryParamsValues,
} from "../../constants/searchParams";
import { useCallback, useEffect, useState } from "react";
import { useQueryParam } from "../../hooks/use-query-param";
import React , {ChangeEvent} from 'react';

const SearchBar = () => {
  const [searchParam, setSearchParam, allQueryParams] = useQueryParam(
    queryParamsKeys.SEARCH
  );
  const [searchByParam] = useQueryParam(queryParamsKeys.SEARCH_BY);
  const [value, setValue] = useState("");

  const setSearchValue = useCallback(() => {
    searchByParam === queryParamsValues.TITLE && searchParam
      ? setValue(searchParam)
      : setValue("");
  }, [searchByParam, searchParam]);

  useEffect(() => {
    setSearchValue();
  }, [setSearchValue]);

  const search = () => {
    const queryParams = {
      ...allQueryParams,
      [queryParamsKeys.SEARCH_BY]: queryParamsValues.TITLE,
    };
    setSearchParam(value, queryParams);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-row w-full">
      <input
        className="w-full  bg-gray-500 text-white"
        aria-label="search-input"
        value={value}
        onChange={handleChange}
      />
      <button
        className="uppercase w-40 mr-4 py-2 text-base text-white bg-red-100  hover:bg-opacity-80 "
        onClick={search}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
