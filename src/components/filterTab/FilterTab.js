import TabItem from "./TabItem";
import { Link, useLocation } from "react-router-dom";
import { tabs } from "./constants";
import { TiArrowSortedDown } from "react-icons/ti";

const FilterTab = () => {
  let location = useLocation();

  return (
    <div className="text-center text-xs	text-white font-light border-b border-gray-200  flex justify-between ">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          {tabs.map((item, i) => (
            <TabItem
              key={item.name}
              path={item.path}
              active={location.hash === item.path.hash}
              name={item.name}
            />
          ))}
        </li>
      </ul>
      <div className="py-4 flex flex-row">
        <span className="text-gray-100 mr-4">SORT BY</span>
        <Link to="" className="flex flex-row">
          RELEASE DATE <TiArrowSortedDown className="pl-1" />
        </Link>
      </div>
    </div>
  );
};
export default FilterTab;
