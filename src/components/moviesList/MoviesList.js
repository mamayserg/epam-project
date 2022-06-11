import MovieItem from "../movieItem/MovieItem";
import "./moviesList.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

const MoviesList = ({movies}) => {
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
  },[id, navigate]);

  return (
    <div className="movies-list">
      {movies.map((item) => (
        <MovieItem movie={item} key={item.id} onClickComponent={openSelectedMovie} />
      ))}
    </div>
  );
};
export default MoviesList;
