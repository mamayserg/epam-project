import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import FilterTab from "../components/filterTab/FilterTab";

const SearchPage = () => (
  <div className="flex flex-col h-screen bg-gray-200">
    <Outlet />
    <div className="bg-gray-500 mt-2 h-full px-10 py-1">
      <FilterTab />
      <div>Search List</div>
    </div>
    <Footer />
  </div>
);
export default SearchPage;
