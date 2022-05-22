import { Link } from "react-router-dom";

const FilterTab = () => (
  <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
    <li className="mr-2">
      <Link
      to="/search"
        aria-current="page"
        className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
      >
        Profile
      </Link>
    </li>
    <li className="mr-2">
      <Link to="/search" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
        Dashboard
      </Link>
    </li>
    <li className="mr-2">
      <Link to="/search" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
        Settings
      </Link>
    </li>
    <li>
      <Link to="/search" className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">
        Disabled
      </Link>
    </li>
  </ul>
);
export default FilterTab;
