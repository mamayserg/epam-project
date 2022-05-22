import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import FilterTab from "../components/filterTab/FilterTab";

const SearchPage = () => (
  <div className="flex flex-col h-screen bg-gray-200">
    <Outlet />
    <FilterTab />
    <div>Search List</div>
    <Footer />
  </div>
);
export default SearchPage;
