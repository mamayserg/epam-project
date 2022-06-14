import { useInput } from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";
import {
  queryParamsKeys,
  queryParamsValues,
} from "../../constants/searchParams";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  // custom hooks =>
  const [textProps, resetText] = useInput("");

  useEffect(() => {
    const search = searchParams.get(queryParamsKeys.SEARCH);
    const searchBy = searchParams.get(queryParamsKeys.SEARCH_BY);
    if (searchBy === queryParamsValues.TITLE && search) {
      resetText(search);
    }
    // eslint-disable-next-line 
  }, [ searchParams]);

  const search = () => {
    navigate(
      `/search?${queryParamsKeys.SEARCH_BY}=${queryParamsValues.TITLE}&${queryParamsKeys.SEARCH}=${textProps.value}`
    );
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
