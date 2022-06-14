import TabItem from "./TabItem";
import { allTab } from "./constants";
import SortMoviesSelect from "./SortMoviesSelect";
import { movieGenre } from "../../constants/genre";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { queryParamsValues, queryParamsKeys } from "../../constants/searchParams";

const FilterTab = () => {
  const [searchParams] = useSearchParams();
  const [currentParams, setCurrentParams] = useState(null);

  useEffect(() => {
    setCurrentParams(searchParams.get(queryParamsKeys.SEARCH));
  }, [searchParams]);
  const tabs = [...allTab, ...movieGenre().slice(0, 5)];

  return (
    <div className="text-center text-xs	text-white font-light border-b border-gray-200  flex justify-between ">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          {tabs.map((item, i) => (
            <TabItem
              key={i}
              query={item.value}
              active={currentParams === item.value}
              name={item.name}
              searchBy={`${ !item.value ? queryParamsValues.TITLE : queryParamsValues.GENRES }`}
            />
          ))}
        </li>
      </ul>
      <div className=" flex flex-row">
        <span className="text-gray-100 mr-4 uppercase py-4">Sort by</span>
        <SortMoviesSelect />
      </div>
    </div>
  );
};
export default FilterTab;
