import MovieItem from "../movieItem/MovieItem";
import "./moviesList.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import React from "react";
import {Movie} from "../../interfaces/movie.interface"

const MoviesList = ({movies, isLoading}: {movies: Movie[], isLoading: boolean}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const openSelectedMovie = useCallback((movie: Movie) => {
    if (String(id) !== String(movie.id)) {
      navigate(`/search/${movie.id}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
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
