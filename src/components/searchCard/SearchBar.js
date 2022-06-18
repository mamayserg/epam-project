import { useInput } from "../../hooks/use-input";
import {
  queryParamsKeys,
  queryParamsValues,
} from "../../constants/searchParams";
import { useEffect } from "react";
import { useQueryParam } from "../../hooks/use-query-param";

const SearchBar = () => {
  const [searchParam, setSearchParam, allQueryParams] = useQueryParam(
    queryParamsKeys.SEARCH
  );
  let [searchByParam] = useQueryParam(queryParamsKeys.SEARCH_BY);

  const [textProps, resetText] = useInput("");

  useEffect(() => {
    const searchQuery = searchParam;
    if (searchByParam === queryParamsValues.TITLE && searchParam) {
      resetText(searchQuery);
    }
    // eslint-disable-next-line
  }, []);

  const search = () => {
    const queryParams = {
      ...allQueryParams,
      [queryParamsKeys.SEARCH_BY]: queryParamsValues.TITLE,
    };
    setSearchParam(textProps.value, queryParams);
  };

  return (
    <div className="flex flex-row w-full">
      <input className="w-full  bg-gray-500 text-white" {...textProps} />
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
