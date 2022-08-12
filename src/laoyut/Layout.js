import Footer from "../components/layout/Footer";
import FilterTab from "../components/filterTab/FilterTab";
import MoviesFound from "../components/moviesList/MoviesFound";
import MoviesList from "../components/moviesList/MoviesList";

const Layout = ({ children }) => (
  <div className="flex flex-col h-screen bg-gray-200">
  {children}
    <div className="bg-gray-500 mt-2 h-max px-10 py-1">
      <FilterTab />
      <MoviesFound />
      <MoviesList />
    </div>
    <Footer />
  </div>
);
export default Layout;
