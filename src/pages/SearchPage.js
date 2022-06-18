import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import FilterTab from "../components/filterTab/FilterTab";
import MoviesFound from "../components/moviesList/MoviesFound";
import MoviesList from "../components/moviesList/MoviesList";
import { useGetMoviesQuery } from "../services/movies.service"
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { queryParamsKeys } from "../constants/searchParams";

const SearchPage = () =>{
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState(null);

  useEffect(() => {
    const search = searchParams.get(queryParamsKeys.SEARCH);
    const searchBy = searchParams.get(queryParamsKeys.SEARCH_BY);
    const sortBy = searchParams.get(queryParamsKeys.SORT_BY);
    const sortOrder = searchParams.get(queryParamsKeys.SORT_ORDER);

    let params = {
      [queryParamsKeys.SEARCH]: search,
      [queryParamsKeys.SEARCH_BY]: searchBy,
      [queryParamsKeys.SORT_BY]: sortBy,
      [queryParamsKeys.SORT_ORDER]: sortOrder
    };

    setQueryParams(params);
  }, [searchParams]);

const {data, isLoading, error} = useGetMoviesQuery(queryParams);

  return (
  <div className="flex flex-col h-screen bg-gray-200">
    <Outlet />
    <div className="bg-gray-500 mt-2 h-max px-10 py-1">
      <FilterTab />
      <MoviesFound count={data?.totalAmount} />
      <MoviesList movies={data?.data || []} isLoading={isLoading} error={error} />
    </div>
    <Footer />
  </div>
)};
export default SearchPage;
