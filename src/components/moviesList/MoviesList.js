import MovieItem from "../movieItem/MovieItem";
import { useRouter } from 'next/router'
import { useCallback } from "react";

const MoviesList = ({movies, isLoading}) => {
  const router = useRouter()
  // let { id } = useParams();

  const openSelectedMovie = useCallback((movie) => {
      router.push(`/search/${movie.id}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    // }
   // eslint-disable-next-line
  },[movies]);
  return (
     <div className="movies-list">
      {(isLoading ? Array.from(new Array(3)) : movies).map((item, index) => (
        <MovieItem isLoading={isLoading} movie={item} key={item?.id || index} onClickComponent={openSelectedMovie} />
      ))}
    </div>
  );
};
export default MoviesList;
