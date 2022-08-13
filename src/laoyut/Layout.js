import Footer from "../components/layout/Footer";
import FilterTab from "../components/filterTab/FilterTab";
import MoviesFound from "../components/moviesList/MoviesFound";
import MoviesList from "../components/moviesList/MoviesList";
import { useGetMoviesQuery } from "../services/movies.service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
    const { query } = useRouter();
    const [queryParams, setQueryParams] = useState(null);
  
    useEffect(() => {
      setQueryParams(query);
    }, [query]);
  
    const { data, isLoading, error } = useGetMoviesQuery(queryParams);

   return ( <div className="flex flex-col h-screen bg-gray-200">
  {children}
    <div className="bg-gray-500 mt-2 h-max px-10 py-1">
      <FilterTab />
      <MoviesFound />
      <MoviesList
          movies={data?.data || []}
          isLoading={isLoading}
          error={error}
        />
    </div>
    <Footer />
  </div>
)};
export default Layout;
// =======
// const SearchPage = () => {
//   const [searchParams] = useSearchParams();
//   const [queryParams, setQueryParams] = useState(null);

//   useEffect(() => {
//     let allQueryParams = Object.fromEntries([...searchParams]) || {};
//     setQueryParams(allQueryParams);
//   }, [searchParams]);

//   const { data, isLoading, error } = useGetMoviesQuery(queryParams);

//   return (
//     <div className="flex flex-col h-screen bg-gray-200">
//       <Outlet />
//       <div className="bg-gray-500 mt-2 h-max px-10 py-1">
//         <FilterTab />
//         <MoviesFound count={data?.totalAmount} />
//         <MoviesList
//           movies={data?.data || []}
//           isLoading={isLoading}
//           error={error}
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default SearchPage;
// >>>>>>> origin/main:src/pages/SearchPage.js
