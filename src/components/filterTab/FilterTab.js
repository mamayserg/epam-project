import TabItem from "./TabItem";
// import { useLocation } from "react-router-dom";
import { tabs } from "./constants";
import SortMoviesSelect from "./SortMoviesSelect";
import { useRouter } from "next/router";

const FilterTab = () => {
  // let location = useLocation();
  const router = useRouter();

  return (
    <div className="text-center text-xs	text-white font-light border-b border-gray-200  flex justify-between ">
      <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
          {tabs.map((item, i) => (
            <TabItem
              key={item.name}
              path={item.path}
              active={router.query === item.path.hash}
              name={item.name}
            />
          ))}
        </li>
      </ul>
      <div className=" flex flex-row">
        <span className="text-gray-100 mr-4 uppercase py-4">Sort by</span>
        <SortMoviesSelect/>
      </div>
    </div>
  );
};
export default FilterTab;
