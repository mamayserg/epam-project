import Footer from "../layout/Footer";
import { Outlet } from "react-router-dom";
import FilterTab from "../filterTab/FilterTab";
import MoviesFound from "../moviesList/MoviesFound";
import MoviesList from "../moviesList/MoviesList";

const SearchPage = () => (
  <div className="flex flex-col h-screen bg-gray-200">
    <Outlet />
    <div className="bg-gray-500 mt-2 h-max px-10 py-1">
      <FilterTab />
      <MoviesFound />
      <MoviesList />
    </div>
    <Footer />
  </div>
);
export default SearchPage;
