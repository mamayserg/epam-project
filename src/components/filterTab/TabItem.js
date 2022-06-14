import { Link } from "react-router-dom";
import { queryParamsKeys } from "../../constants/searchParams"; 

const TabItem = ({ name, active, query, searchBy }) => (
  <Link
    to={`/search?${queryParamsKeys.SEARCH_BY}=${searchBy}&${queryParamsKeys.SEARCH}=${query}`}
    className={`inline-block p-4 rounded-t-lg border-b-2 border-transparent uppercase
             hover:text-gray-100 hover:border-gray-400 ${
               active && "border-red-100 active"
             }`}
  >
    {name}
  </Link>
);
export default TabItem;
