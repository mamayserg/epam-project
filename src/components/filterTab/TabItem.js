// import { Link } from "react-router-dom";
import { queryParamsKeys } from "../../constants/searchParams";
import { useQueryParam } from "../../hooks/use-query-param";

const TabItem = ({ name, active, query, searchBy }) => {
  const [, setSearchParam, allQueryParams] = useQueryParam( queryParamsKeys.SEARCH );

  const search = () => {
    const queryParams = {
      ...allQueryParams,
      [queryParamsKeys.SEARCH_BY]: searchBy,
    };
    setSearchParam(query, queryParams);
  };

  return (
    <div
      onClick={search}
      className={`cursor-pointer inline-block p-4 rounded-t-lg border-b-2 border-transparent uppercase
             hover:text-gray-100 hover:border-gray-400 ${
               active && "border-red-100 active"
             }`}
    >
      {name}
    </div>
  );
};
export default TabItem;
