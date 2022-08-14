import MovieItem from "../movieItem/MovieItem";
import { useRouter } from 'next/router'
import React, { useCallback } from "react";
import {Movie} from "../../interfaces/movie.interface"

const MoviesList = ({movies, isLoading}: {movies: Movie[], isLoading: boolean}) => {
  const router = useRouter()
  // let { id } = useParams();

  const openSelectedMovie = useCallback((movie: Movie) => {
      router.push(`/search/${movie.id}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

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
