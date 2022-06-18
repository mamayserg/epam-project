import { useInput } from "../../hooks/use-input";
import {
  queryParamsKeys,
  queryParamsValues,
} from "../../constants/searchParams";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // custom hooks =>
  const [textProps, resetText] = useInput("");

  useEffect(() => {
    const searchQuery = searchParams.get(queryParamsKeys.SEARCH);
    const searchByQuery = searchParams.get(queryParamsKeys.SEARCH_BY);
    if (searchByQuery === queryParamsValues.TITLE && searchQuery) {
      resetText(searchQuery);
    }
    // eslint-disable-next-line
  }, []);

  const search = () => {
    setSearchParams({ [queryParamsKeys.SEARCH_BY]: queryParamsValues.TITLE, [queryParamsKeys.SEARCH]: textProps.value })
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
