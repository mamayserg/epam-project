import Link from "next/link";

const TabItem = ({ path = "/search", name, active }) => (
  <Link
    href={path}
    className={`inline-block p-4 rounded-t-lg border-b-2 border-transparent 
             hover:text-gray-100 hover:border-gray-400 ${
               active && "border-red-100 active"
             }`}
  >
    <a>{name}</a>
  </Link>
);
export default TabItem;
