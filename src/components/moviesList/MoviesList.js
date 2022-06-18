import MovieItem from "../movieItem/MovieItem";
import "./moviesList.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

const MoviesList = ({movies, isLoading}) => {
  const navigate = useNavigate();
  let { id } = useParams();

  const openSelectedMovie = useCallback((movie) => {
    if (String(id) !== String(movie.id)) {
      navigate(`/search/${movie.id}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
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
