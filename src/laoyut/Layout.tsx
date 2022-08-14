import Footer from "../components/layout/Footer";
import FilterTab from "../components/filterTab/FilterTab";
import MoviesFound from "../components/moviesList/MoviesFound";
import MoviesList from "../components/moviesList/MoviesList";
import { useGetMoviesQuery } from "../services/movies.service";
import { useRouter } from "next/router";
import React, { useEffect, useState, ReactElement } from "react";

type Props = {
  children: ReactElement,
};

export type queryParam = {
  [key: string]: string;
}

const Layout = ({ children }: Props) => {
    const { query } = useRouter();
    const [queryParams, setQueryParams] = useState<queryParam | null>(null);
  
    useEffect(() => {
      setQueryParams(query as queryParam);
    }, [query]);
  
    const { data, isLoading } = useGetMoviesQuery(queryParams);

   return ( <div className="flex flex-col h-screen bg-gray-200">
  {children}
    <div className="bg-gray-500 mt-2 h-max px-10 py-1">
      <FilterTab />
      <MoviesFound />
      <MoviesList
          movies={data?.data || []}
          isLoading={isLoading}
        />
    </div>
    <Footer />
  </div>
)};
export default Layout;