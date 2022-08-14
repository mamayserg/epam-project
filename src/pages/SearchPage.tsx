import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import FilterTab from "../components/filterTab/FilterTab";
import MoviesFound from "../components/moviesList/MoviesFound";
import MoviesList from "../components/moviesList/MoviesList";
import { useGetMoviesQuery } from "../services/movies.service";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState< unknown | null >(null);

  useEffect(() => {
    const allQueryParams = Object.fromEntries([...searchParams]) || {};
    setQueryParams(allQueryParams);
  }, [searchParams]);

  const { data, isLoading } = useGetMoviesQuery(queryParams);

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <Outlet />
      <div className="bg-gray-500 mt-2 h-max px-10 py-1">
        <FilterTab />
        <MoviesFound count={data?.totalAmount} />
        <MoviesList movies={data?.data || []} isLoading={isLoading} />
      </div>
      <Footer />
    </div>
  );
};
export default SearchPage;
