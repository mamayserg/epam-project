import { Link } from "react-router-dom";

const TabItem = ({path, name, active}) => (
  <Link
    to={path}
    className={`inline-block p-4 rounded-t-lg border-b-2 border-transparent 
             hover:text-gray-100 hover:border-gray-400 ${active && 'border-red-100 active' }`}
  >
    {name}
  </Link>
);
export default TabItem;
